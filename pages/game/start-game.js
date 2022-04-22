import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';
import CardDisplay from '../../components/CardDisplay';
import CollectionCardDisplay from '../../components/CollectionCardDisplay';
import CurrentHandContainer from '../../components/CurrentHandContainer.js';
import CurrentCollectionContainer from '../../components/CurrentCollectionContainer.js';
import OpponentsContainer from '../../components/OpponentsContainer.js';
import OpponentDisplay from '../../components/OpponentDisplay.js';
import {Card, Deck, Hand, Collection, getRandomInt} from '../../components/simulatorCode';
import 'bootstrap/dist/css/bootstrap.css'
import {useState, useEffect, useRef} from 'react';

export default function StartGame() {

    const [currentHand, setCurrentHand] = useState(new Hand());
    const [inGame, setInGame] = useState(true);
    const [currentCollection, setCurrentCollection] = useState(new Collection());
    const [allHands, setAllHands] = useState([]);
    const [cardsUsed, setCardsUsed] = useState(0);
    const [opponentHands, setOpponentHands] = useState([]);
    const [opponentCollections, setOpponentCollections] = useState([new Collection(), new Collection(), new Collection()]);
    const [shouldRotate, setShouldRotate] = useState(false);

    const firstRender = useRef(true);

    console.log(firstRender.current);

    useEffect(() => {
        initializeHands();
    },[]);

    useEffect(() => {
        if (cardsUsed === 8){
            setInGame(false);
        }
    },[cardsUsed])
    

    function initializeHands(){
        const nigiriCard = new Card('nigiri','/salmon.png');
        const sashimiCard = new Card('sashimi','/sashimi.png');
        const tempuraCard = new Card('tempura','/tempura.png');
        const dumplingCard = new Card('dumpling','/dumpling.png');
        let initialList = [];
        for (let i = 0; i < 12; i++){
            initialList.push(nigiriCard);
            initialList.push(sashimiCard);
            initialList.push(tempuraCard);
            initialList.push(dumplingCard);
        }
        let initialDeck = new Deck(initialList);
        let hand1= new Hand();
        let hand2= new Hand();
        let hand3= new Hand();
        let hand4= new Hand();
        hand1.drawFrom(initialDeck, 8);
        hand2.drawFrom(initialDeck, 8);
        hand3.drawFrom(initialDeck, 8);
        hand4.drawFrom(initialDeck, 8);
        setCurrentHand(hand1);
        setOpponentHands([hand2, hand3, hand4]);
        setAllHands([hand1, hand2, hand3, hand4]);
    }

    function rotateHands(){
        // console.log(allHands);
        let newHands = allHands;
        newHands.unshift(newHands.pop());
        setAllHands(newHands);
        setCurrentHand(allHands[0]);
        setOpponentHands(allHands.slice(1));
        setShouldRotate(false);
    }

    function generateOpponents(){
        let returnArray = [];
        opponentHands.forEach((hand,index) => {
            returnArray.push(
                <OpponentDisplay
                    key={index}
                    indexValue={index}
                    opponentCollections={opponentCollections}
                    setOpponentCollections={setOpponentCollections}
                    opponentHands={opponentHands}
                    setOpponentHands={setOpponentHands}
                    cardsUsed={cardsUsed}
                />
            );
        })
        return returnArray;
    }

    function generateCards(){
        let returnArray = [];
        // if (currentHand.length === 0){
        //     return (<h3>No cards left. This round is over!</h3>)
        // }
        currentHand.cardList.forEach((card,index)=> {
            returnArray.push(
                <CardDisplay
                thisCard={card}
                key={index}
                indexValue={index}
                currHandCards={currentHand.cardList}
                currCollectionCards={currentCollection.cardList}
                setCurrHand={setCurrentHand}
                setCurrCollection={setCurrentCollection}
                cardsUsed={cardsUsed}
                setCardsUsed={setCardsUsed}
                allHands={allHands}
                setAllHands={setAllHands}
                setShouldRotate={setShouldRotate}
                />
            );
        })
        return returnArray;
    }

    function generateCollection(){
        let returnArray = [];
        currentCollection.cardList.forEach((card,index)=>{
            returnArray.push(
                <CollectionCardDisplay
                thisCard={card}
                key={index}
                indexValue={index}
                />
            )
        })
        return returnArray;
    }

    function showGameControlOrResults(){
        if (inGame){
            return (
                    <>
                        <CurrentHandContainer>
                            {generateCards()}
                        </CurrentHandContainer>
                        <button className = "btn btn-primary" onClick={rotateHands} disabled={!shouldRotate}>Rotate</button>
                        <p>{shouldRotate ? "Time to rotate your hands!": "Don't rotate hands yet. Pick a card first!"}</p>
                    </>
            );
        }
        else {return(
                    <>

                    </>
        )};
    }


    return (
        <Layout>
            <Head>
                <title>Sushi Go Game</title>
                <link rel="icon" href="/sushiicon.png" />
                <meta charset="utf-8" />
            </Head>

            <main>
                <h1>Let's play Sushi Go!</h1>

                <OpponentsContainer>
                    {generateOpponents()}
                </OpponentsContainer>

                {showGameControlOrResults()}

                <CurrentCollectionContainer points={currentCollection.calculateScore()}>
                    {generateCollection()}
                </CurrentCollectionContainer>

                <Link href = "/">
                    <button className="btn btn-secondary">Back to main menu</button>
                </Link>
            </main>

            <footer>
                <p>Created with &#128153; by Qingyi Wang</p>
            </footer>
        </Layout>
    )
}