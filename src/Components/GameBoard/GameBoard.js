import React from "react";
import './GameBoard.css';
import { CardGame } from '../CardGame/CardGame';
import { defaultArray } from '../GameBoard/data';

export const GameBoard = (props) => {
    const [...defaultCards] = defaultArray;
    const cards = props.cardsArray.length === 0 ? defaultCards : props.cardsArray;
    console.log(cards);

    const cardGamesArray = (amountOfCards = 6, arrayWithContent = defaultArray) => {
        if (amountOfCards % 2 !== 0) {
            return window.alert('You need an even number of cards to match!');
        }
        if ((arrayWithContent.length * 2) >= amountOfCards) {
            console.log('legnth = amount of card')
            return;
        }
        let dataArray = arrayWithContent; 
        for (let i = amountOfCards; (dataArray.length * 2) < amountOfCards; i--) {
            const rand = Math.floor(Math.random() * arrayWithContent.length);
            const newArrayItem = arrayWithContent[rand];
            dataArray.push(newArrayItem);
        }
        const cardsToRender = dataArray.concat(dataArray);
        return randomiseCards(cardsToRender);
    };

    const randomiseCards = (dataArray, returnArray = []) => {
        let copiedArray = dataArray;
        const randomisedArray = returnArray;
        const rand = Math.floor(Math.random() * copiedArray.length);
        const pickedArrayItem = copiedArray[rand];
        randomisedArray.push(pickedArrayItem);
        copiedArray.splice(rand, 1);
        return copiedArray.length === 0 ? 
            randomisedArray : 
            randomiseCards(copiedArray, randomisedArray);
    }

    const arrayToRender = cardGamesArray(10, cards);

    const renderCards = (arrayOfCards) => {
        console.log(`arrayToRender: ${arrayToRender}`)
        let count = 0;
        return arrayToRender.map(card => {
            count++
            return <CardGame card={card} key={count}/>
        });
    };

    return(
        <main className="game-board">
            {renderCards(arrayToRender)}
        </main>
    );
};