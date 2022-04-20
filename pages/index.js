import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import 'bootstrap/dist/css/bootstrap.css'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Sushi Go Game</title>
        <link rel="icon" href="/sushiicon.png" />
        <meta charset="utf-8" />
      </Head>

      <main>
        <h1>The Great Sushi Go Simulator</h1>
        <Link href='https://www.gamewright.com/gamewright/pdfs/Rules/SushiGoTM-RULES.pdf'>
          <a>PDF about Sushi Go's rules</a>
        </Link>
        <Link href='/game/start-game'>
          <button className="btn btn-primary" href='/game/start-game'>Start Game</button>
        </Link>
      </main>

      <footer>
        <p>Created with &#128153; by Qingyi Wang</p>
      </footer>
    </Layout>
  )
}
