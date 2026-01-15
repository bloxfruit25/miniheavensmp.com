// Demo auth API storing user records in data/users.json (for demo only).
import fs from 'fs'
import path from 'path'
import jwt from 'jsonwebtoken'
const JWT_SECRET = process.env.JWT_SECRET || 'change_this_secret'

const dataDir = path.join(process.cwd(),'data')
const usersFile = path.join(dataDir,'users.json')
if(!fs.existsSync(dataDir)) fs.mkdirSync(dataDir)
if(!fs.existsSync(usersFile)) fs.writeFileSync(usersFile, JSON.stringify([]))

export default async function handler(req,res){
  const users = JSON.parse(fs.readFileSync(usersFile,'utf8'))
  const { action } = req.query
  if(req.method==='POST'){
    if(action==='register'){
      const {email,password} = req.body
      if(users.find(u=>u.email===email)) return res.status(400).json({error:'exists'})
      const cfg = JSON.parse(fs.readFileSync(path.join(process.cwd(),'data','config.json'),'utf8'))
      const role = (email===cfg.adminEmail) ? 'admin' : 'user'
      const user = {id:Date.now(),email,password,role,wallet:0,discordId:null}
      users.push(user)
      fs.writeFileSync(usersFile,JSON.stringify(users,null,2))
      return res.status(200).json({ok:true})
    }
    if(action==='login'){
      const {email,password} = req.body
      const u = users.find(x=>x.email===email && x.password===password)
      if(!u) return res.status(401).json({error:'bad'})
      const token = jwt.sign({id:u.id,email:u.email,role:u.role},JWT_SECRET,{expiresIn:'7d'})
      res.setHeader('Set-Cookie', `token=${token}; HttpOnly; Path=/; Max-Age=${60*60*24*7}`)
      return res.status(200).json({ok:true})
    }
  }
  res.status(405).end()
}
