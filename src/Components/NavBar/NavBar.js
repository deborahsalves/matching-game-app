import React from 'react';
import './NavBar.css';
import { PlayerInfo } from '../PlayerInfo/PlayerInfo';

export const NavBar = (props) => {
    console.log(`allPlayers at NavBar.js: ${props.allPlayers}`)
    const playersArray = props.allPlayers;
    console.log(`playersArray at NavBar.js: ${playersArray[0].playerName}`)
    
    return (
        <nav className='nav-bar'>
            {playersArray.map(player => {
                const playerKey = playersArray.indexOf(player);
                return (
                    <PlayerInfo playerInfo={player} key={playerKey}/>
                )
            })}
        </nav>
    );
};