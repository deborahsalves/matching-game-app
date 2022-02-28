import React from "react";
import './PlayerName.css';

export const PlayerName = (props) => {
    return(
        <div className="player-name">
            {props.playerName}
        </div>
    );
};