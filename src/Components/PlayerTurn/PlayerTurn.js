import React from "react";
import './PlayerTurn.css';

export const PlayerTurn = (props) => {
    return(
        // <img className="player-turn" src="../../images/icon-arrow-down.png" alt="Arrow indicating which player has the turn"/>
        <div className="player-turn" data-currentPlayer={props.playerTurn}>
            V
        </div>        
    );
};