import React from 'react';
import './NavBar.css';
import { PlayerInfo } from '../PlayerInfo/PlayerInfo';
import { PlayerTurn } from '../PlayerTurn/PlayerTurn';

export const NavBar = (props) => {
    console.log(`allPlayers at NavBar.js: ${props.allPlayers}`)
    const playersArray = props.allPlayers;
    console.log(`playersArray at NavBar.js: ${playersArray[0].playerName}`)
    props = {...props, playerTurn: 1};
    
    
    return (
        <nav className='nav-bar'>
            <PlayerTurn playerTurn={props.playerTurn}/>
            {playersArray.map(player => {
                const playerKey = playersArray.indexOf(player);
                return (
                    <PlayerInfo playerInfo={player} key={playerKey}/>
                )
            })}
        </nav>
    );
};