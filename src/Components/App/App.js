import React, { useState, useEffect } from 'react';
import './App.css';
import { NavBar } from '../NavBar/NavBar';
import { GameBoardContainer } from '../GameBoard/GameBoardContainer';

export const App = () => {
    const [ allPlayers, setAllPlayers ] = useState([]);
    const [ playerTurn, setPlayerTurn ] = useState(1);

    useEffect(() => {
        setAllPlayers([{
            playerName: 'Player 1',
            playerScore: '0',
        },{
            playerName: 'Player 2',
            playerScore: '0',
        }]);
    }, []);

    const swapPlayer = (currentPlayer) => {
        return currentPlayer === 1 ? setPlayerTurn(2) : setPlayerTurn(1);
    }

    return (
        <div className='app'>
            <NavBar allPlayers={allPlayers} playerTurn={playerTurn}/>
            <GameBoardContainer 
                cardsArray={[]} 
                amountOfCards={6} 
                swapPlayer={swapPlayer}
                currentPlayer={playerTurn}/>
        </div>
    )

}