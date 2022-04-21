import styles from './CollectionCardDisplay.module.css'
import Image from 'next/image'

export default function CollectionCardDisplay(props) {
    return(
        <div className = {styles.container}>
            <Image
                src={props.thisCard.img_url}
                alt={`Picture of ${props.thisCard.name} card`}
                width={100}
                height={150}
            />
            <p className = {styles.text}>{props.thisCard.name}</p>
        </div>
    )
}