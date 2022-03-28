import React from "react";
import './PlayerTurn.css';
import arrowDown from '../../images/icon-arrow-down.png';

export const PlayerTurn = (props) => {
    return(
        <div className="player-turn">
            <img className="player-turn-arrow" 
            src={arrowDown} 
            alt="Arrow indicating which player has the turn"
            data-currentPlayer={props.playerTurn}/>
        </div>
    );
};