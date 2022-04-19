import Link from 'next/link';
import Layout from '../../components/layout';
import CardDisplay from '../../components/CardDisplay';
import CurrentHandContainer from '../../components/CurrentHandContainer.js';
import {Card, Deck, Hand, Collection, getRandomInt} from '../../components/simulatorCode';
import {useState, useEffect} from 'react';

export default function StartGame() {

    const [currentHand, setCurrentHand] = useState(new Hand());
    const [inGame, setInGame] = useState(false);


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
        let hand1 = new Hand()
        hand1.drawFrom(initialDeck, 8);
        setCurrentHand(hand1);
        console.log('initialized');
        console.log(hand1);
    }

    useEffect(() => {
        initializeHands();
    },[])


    function generateCards(){
        let returnArray = [];
        console.log(currentHand.cardList);
        console.log(currentHand.cardCount);
        currentHand.cardList.forEach((card,index)=> {
            console.log(card);
            returnArray.push(
                <CardDisplay
                thisCard={card}
                key={index}
            />);
        })
        return returnArray;
    }


    return (
    <Layout>
        <h1>Let's play Sushi Go!</h1>
        <CurrentHandContainer>
        {generateCards()}
        </CurrentHandContainer>
        <Link href = "/">
            <button className="btn btn-primary">Back to main menu</button>
        </Link>
        <footer>
            <p>Created with &#128153; by Qingyi Wang</p>
        </footer>
    </Layout>
    )
}