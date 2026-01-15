import { useState } from 'react'
import Router from 'next/router'

export default function Register(){
  const [email,setEmail]=useState(''); const [pass,setPass]=useState('')
  async function submit(e){
    e.preventDefault()
    const res = await fetch('/api/auth?action=register',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({email,password:pass})})
    if(res.ok) Router.push('/login')
    else {
      const j = await res.json().catch(()=>({error:'fail'}))
      alert('Register failed: ' + (j.error || 'unknown'))
    }
  }
  return (
    <main>
      <h1>Register</h1>
      <form onSubmit={submit}>
        <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} required />
        <input placeholder="Password" type="password" value={pass} onChange={e=>setPass(e.target.value)} required />
        <button type="submit">Register</button>
      </form>
    </main>
  )
}
