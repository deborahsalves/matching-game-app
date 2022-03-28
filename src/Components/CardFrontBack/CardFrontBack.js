import React from 'react';
import './CardFrontBack.css';
import { CardGame } from '../CardGame/CardGame';
import aluraPixel from '../../images/game-cards/alura-pixel.png';

export const CardFrontBack = (props) => {

    const handleClick = (event) => {
        props.trackFlipped()
        const cardClicked = event.target.closest('.card-front-back');
        cardClicked.classList.toggle('-flipped');
    }

    return (
        <article className="card-front-back" onClick={handleClick}>
            <div className="card -front">
                {<CardGame
                    src={aluraPixel}
                    alt="Logo da Alura"
                />}
            </div>
            <div className="card -back">
                {<CardGame
                    src={props.card.src}
                    alt={props.card.alt}
                />}
            </div>
        </article>
    )
}