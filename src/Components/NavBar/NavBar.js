import React from 'react';
import './NavBar.css';
import { PlayerInfo } from '../PlayerInfo/PlayerInfo';
import { PlayerTurn } from '../PlayerTurn/PlayerTurn';

export const NavBar = (props) => {
    const playersArray = props.allPlayers;    
    
    return (
        <nav className='nav-bar'>
            <PlayerTurn playerTurn={props.playerTurn}/>
            <div className='player-info-container'>
                {playersArray.map(player => {
                    const playerKey = playersArray.indexOf(player);
                    return (
                        <PlayerInfo playerInfo={player} key={playerKey}/>
                    )
                })}
            </div>
        </nav>
    );
};