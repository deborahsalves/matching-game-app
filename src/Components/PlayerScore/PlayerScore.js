import React from "react";
import './PlayerScore.css';

export const PlayerScore = (props) => {
    return (
        <div className="player-score">
            {props.playerScore}
        </div>
    );
};