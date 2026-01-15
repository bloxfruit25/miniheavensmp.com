// Protected endpoint: serves private/miniheaven_resourcepack.zip only for admin users.
// Requires the token cookie set by /api/auth?action=login
import fs from 'fs'
import path from 'path'
import jwt from 'jsonwebtoken'
const JWT_SECRET = process.env.JWT_SECRET || 'change_this_secret'
export default function handler(req,res){
  const cookie = req.headers.cookie || ''
  const tokenMatch = cookie.split(';').map(s=>s.trim()).find(s=>s.startsWith('token='))
  if(!tokenMatch) return res.status(401).json({error:'no auth'})
  const token = tokenMatch.split('=')[1]
  try{
    const data = jwt.verify(token,JWT_SECRET)
    if(data.role !== 'admin') return res.status(403).json({error:'not admin'})
    const filePath = path.join(process.cwd(),'private','miniheaven_resourcepack.zip')
    if(!fs.existsSync(filePath)) return res.status(404).json({error:'missing'})
    const stat = fs.statSync(filePath)
    res.setHeader('Content-Type','application/zip')
    res.setHeader('Content-Length',stat.size)
    const stream = fs.createReadStream(filePath)
    stream.pipe(res)
  }catch(e){
    return res.status(401).json({error:'bad token'})
  }
}
