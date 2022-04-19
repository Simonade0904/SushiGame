import {useState} from 'react';

export default function CardDisplay(props) {
    return(
        <div>
            <p>{props.thisCard.name}</p>
            <img src={props.thisCard.img_url} />
        </div>
    )
}