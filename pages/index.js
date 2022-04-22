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
          <a>PDF about Sushi Go's complete rules</a>
        </Link>
        
        <div className="guide-container">
          <h3>Quick Guide</h3>
          <ol>
            <li>We will play a simplfied version of Sushi Go. There are four players total. You, and 3 other AI players.</li>
            <li>Each player receives a hand of 8 cards. You take 1 card, and pass the hand to the person that's next to you. In this game, you press the "rotate" button.</li>
            <li>Repeat until all the cards are taken.</li>
          </ol>
          <hr></hr>
          <h3>Cards Overview</h3>
          <ul>
            <li>Nigiri: Each individual card is worth 2 points.</li>
            <li>Tempura: Each pair of them is worth 5 points. 0 if you don't get a pair.</li>
            <li>Sashimi: Each triplet of them is worth 10 points. 0 if you don't get enough to form a triplet.</li>
            <li>Dumpling: 1 point for 1 dumpling, 3 points for 2, 6 points for 3, 10 points for 4, 15 points for 5 or more of them.</li>
          </ul>
        </div>

        <Link href='/game/start-game'>
          <button className="btn btn-primary" href='/game/start-game'>Start Game</button>
        </Link>
      </main>

      <footer>
        <p>Created with &#128153; by Qingyi Wang</p>
      </footer>
      <style jsx>{`
      .guide-container{
        border: 1px solid black;
        border-radius: 0.5rem;
        padding: 24px;
      }
    `}</style>
    </Layout>
  )
}
