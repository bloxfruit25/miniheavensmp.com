import {useEffect,useState} from 'react'
export default function Admin(){
  const [ok,setOk] = useState(false)
  useEffect(()=>{ /* placeholder: in production check session & role via API */ setOk(true)},[])
  if(!ok) return <div>Checking admin...</div>
  return (
    <main>
      <h1>Admin Dashboard</h1>
      <p>Welcome admin. Use this page to credit coins, review proofs, and fulfill orders.</p>
      <p>To download your resource pack locally, follow README instructions.</p>
    </main>
  )
}
