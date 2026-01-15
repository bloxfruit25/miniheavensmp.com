import Link from 'next/link'
export default function Home(){
  return (
    <main>
      <h1>Mini Heaven SMP</h1>
      <p>Server IP: <strong>play.miniheaven.example</strong> (placeholder)</p>
      <p>
        <Link href="/store"><a>Store</a></Link> •{" "}
        <Link href="/resource-pack"><a>Resource Pack</a></Link> •{" "}
        <Link href="/register"><a>Register</a></Link>
      </p>
      <section>
        <h2>About</h2>
        <p>Mini Heaven SMP — private SMP server for friends. Use the store to buy ranks with site coins.</p>
      </section>
    </main>
  )
}
