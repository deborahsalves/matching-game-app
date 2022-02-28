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
            <NavBar allPlayers={allPlayers}/>
            <GameBoard cardsArray={[]}/>
        </div>
    )

}