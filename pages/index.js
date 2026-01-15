import Link from 'next/link'

export default function Home() { return ( <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}> <h1>Mini Heaven SMP</h1> <p>Server IP: <strong>play.miniheaven.example</strong> (placeholder)</p> <p> <Link href="/store">Store</Link> • <Link href="/resource-pack">Resource Pack</Link> • <Link href="/register">Register</Link> </p> <section> <h2>About</h2> <p>Mini Heaven SMP — private SMP server for friends. Use the store to buy ranks with site coins.</p> </section> </main> ) }
