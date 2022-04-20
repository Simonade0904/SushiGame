import styles from './CurrentCollectionContainer.module.css';

export default function CurrentCollectionContainer(props){
    return(
        <div>
            <h2>Here are the cards you've picked so far...</h2>
            <h3>Current points: {props.points}</h3>
            <div className={styles.container}>
            {props.children}
            </div>
        </div>
    )
}