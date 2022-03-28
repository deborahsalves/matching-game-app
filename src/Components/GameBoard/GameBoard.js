import React from "react";
import './GameBoard.css';
import { CardFrontBack } from "../CardFrontBack/CardFrontBack"; 

export const GameBoard = (props) => {
    return(
        <main className="game-board">
            {props.cards.map(card => { 
                return(
                    <CardFrontBack card={card}
                        key={card.renderId}
                        trackFlipped={props.trackFlipped}
                    />
                )})
            }
        </main>
    );
};