import Image from 'next/image'
import {useEffect, useRef} from 'react'
import styles from './OpponentDisplay.module.css'

export default function OpponentDisplay(props){

    const opponentFirstRender = useRef(true);
    
    function opponentClaimCard(){
        let newOpponentHands = [...props.opponentHands];
        let newOpponentCollections = [...props.opponentCollections];
        newOpponentCollections[props.indexValue].pickCards(newOpponentHands[props.indexValue],1);
        props.setOpponentHands(newOpponentHands);
        props.setOpponentCollections(newOpponentCollections);
    }

    useEffect(() => {
        if (opponentFirstRender.current){
            opponentFirstRender.current = false;
        }
        else{
            opponentClaimCard();
        }
    },[props.cardsUsed]);

    function generateOpponentCards(){
        let returnArray = [];
        props.opponentCollections[props.indexValue].cardList.forEach((card, index) => {
            returnArray.push(
                <Image
                    key={index}
                    src={card.img_url}
                    alt={`Picture of ${card.name} Card, owned by opponent ${props.indexValue + 1}`}
                    width={20}
                    height={28}
                />
            );
        })
        return returnArray;
    }
    
    return(
        <div>
            <p>Opponent {props.indexValue}: Currently has {props.opponentCollections[props.indexValue].calculateScore()} points.</p>
            <div className={styles.container}>
                {generateOpponentCards()}
            </div>
        </div>
    )
}