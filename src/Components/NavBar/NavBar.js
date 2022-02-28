import React from 'react';
import './NavBar.css';
import { PlayerInfo } from '../PlayerInfo/PlayerInfo';
import { PlayerTurn } from '../PlayerTurn/PlayerTurn';

export const NavBar = (props) => {
    const playersArray = props.allPlayers;
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