import React from "react";
import './PlayerInfo.css';
import { PlayerName } from '../PlayerName/PlayerName';
import { PlayerScore } from '../PlayerScore/PlayerScore';

export const PlayerInfo = (props) => {
    console.log(`playerInfo at PlayerInfo.js: ${Object.getOwnPropertyNames(props.playerInfo)}`)
    return(
        <div className="player-info">
            <PlayerName playerName={props.playerInfo.playerName}/>
            <PlayerScore playerScore={props.playerInfo.playerScore}/>
        </div>
    );
};