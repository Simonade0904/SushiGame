import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import 'bootstrap/dist/css/bootstrap.css'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Sushi Go Game</title>
        <link rel="icon" href="/favicon.ico" />
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

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          row-gap: 24px;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: #20627e;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: Cabin, Helvetica Neue,
            sans-serif;
        }
      `}</style>
    </Layout>
  )
}
