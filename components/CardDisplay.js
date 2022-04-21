import {useState} from 'react';
import styles from './CardDisplay.module.css'
import Image from 'next/image'
import {Card, Deck, Hand, Collection, getRandomInt} from '../components/simulatorCode';

export default function CardDisplay(props) {
    const claimCard = (e) => {
        console.log(`I am myself, and I will pick from the pile that contains ${props.currHandCards.length}`);
        console.log(props.currHandCards);
        let newHand = new Hand();
        newHand.addCards(props.currHandCards);
        let newCollection = new Collection();
        newCollection.addCards(props.currCollectionCards);
        newCollection.pickByIndex(newHand, props.indexValue);
        let newAllHands = props.allHands;
        newAllHands[0].removeCard(props.indexValue);
        props.setAllHands(newAllHands);
        props.setCurrHand(newHand);
        props.setCurrCollection(newCollection);
        props.setCardsUsed(props.cardsUsed + 1);
    }

    return(
        <div className = {styles.container} onClick={claimCard} tabIndex="0">
            <Image
                src={props.thisCard.img_url}
                alt={`Picture of ${props.thisCard.name} Card`}
                width={100}
                height={150}
                className={styles.img}
            />
            <p className = {styles.text}>{props.thisCard.name}</p>
        </div>
    )
}