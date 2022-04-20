import {useState} from 'react';
import styles from './CurrentHandContainer.module.css';

export default function CurrentHandContainer(props){
    return(
    <div>
        <h2>Your current hand -- pick a card!</h2>
        <div className={styles.container}>
        {props.children}
        </div>
    </div>
    )
}