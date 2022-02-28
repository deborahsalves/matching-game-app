import React from "react";
import './CardGame.css';

export const CardGame = (props) => {
    console.log(props.card.src)
    return(
        <article className="card-game" key={props.card.id}>
            here is {props.card.name}:
            <img className="card-game-image"
                 src={props.card.src}
                 alt={props.card.alt}
                 name={props.card.name}
                 id={props.card.id}
            />
        </article>
    );
};