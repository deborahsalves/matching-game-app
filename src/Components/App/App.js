import React, { useState } from 'react';
import './App.css';
import { NavBar } from '../NavBar/NavBar';
import { GameBoard } from '../GameBoard/GameBoard';

export const App = () => {
    // const [ allPlayers, setAllPlayers ] = useState();

    // hard-code it first:
    const allPlayers = [{
        playerName: 'Player 1',
        playerScore: '0',
    },{
        playerName: 'Player 2',
        playerScore: '0',
    }];

    return (
        <div className='app'>
            {console.log(`allPlayers at App.js: array of objects`)}
            <NavBar allPlayers={allPlayers}/>
            <GameBoard />
        </div>
    )

}