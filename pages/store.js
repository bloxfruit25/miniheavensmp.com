import Link from 'next/link'
export default function Store(){
  return (
    <main>
      <h1>Store</h1>
      <p>This demo store uses site coins (manual top-up). Admin will credit coins after proof of payment.</p>
      <p>Edit <code>data/products.json</code> to add ranks, colors, and prices.</p>
      <p><Link href="/admin"><a>Admin Dashboard</a></Link></p>
    </main>
  )
}
