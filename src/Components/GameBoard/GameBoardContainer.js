import React, { useState, useEffect } from "react";
import './GameBoard.css';
import { defaultArray } from '../GameBoard/data';
import { GameBoard } from "./GameBoard";

export const GameBoardContainer = (props) => {
    const [ currentCards, setCurrentCards ] = useState([]);
    const [ flippedCards, setFlippedCards ] = useState([]);

    const [...defaultCards] = defaultArray;
    let flipCount = 0;

    useEffect(() => {
        const cards = props.cardsArray.length === 0 ? defaultCards : props.cardsArray;
        const arrayToRandomise = cardGamesArray(props.amountOfCards, cards);
        const randomisedArray = randomiseCards(arrayToRandomise);
        const arrayToRender = randomisedArray.map(card => {
            return { ...card, renderId: card.name + (Math.random() * 10).toFixed(0)}
        });
    
        setCurrentCards(arrayToRender);
    }, []);

    const cardGamesArray = (amountOfCards = 6, arrayWithContent = defaultArray) => {
        let dataArray = arrayWithContent;

        // if uneven amount of number, alert user
        if (amountOfCards % 2 !== 0) {
            return window.alert('You need an even number of cards to match!');
        }

        // if not enough data to generate amount of cards, duplicate random entries
        if ((arrayWithContent.length * 2) < amountOfCards) {
            for (let i = amountOfCards; (dataArray.length * 2) < amountOfCards; i--) {
                const rand = Math.floor(Math.random() * arrayWithContent.length);
                const newArrayItem = arrayWithContent[rand];
            }
        }

        // if too much data to generate amount of cards, slice before creating pairs
        dataArray = (dataArray.length * 2) > amountOfCards ? dataArray.slice(0, (amountOfCards/2)) : dataArray;
        const cardsToRender = dataArray.concat(dataArray);
        return cardsToRender;
    };

    
    const randomiseCards = (dataArray, returnArray = []) => {
        let copiedArray = dataArray;
        // on being recalled, the fn will use returnArray as the already randomised items
        const randomisedArray = returnArray;
        const rand = Math.floor(Math.random() * copiedArray.length);
        const pickedArrayItem = copiedArray[rand];
        randomisedArray.push(pickedArrayItem);
        copiedArray.splice(rand, 1);
        return copiedArray.length === 0 ? 
        randomisedArray : 
        randomiseCards(copiedArray, randomisedArray);
    }
    
    const flipCard = (clickedCardId) => {
        console.log(`clickedCardId: ${clickedCardId}`)
    }

    const trackFlipped = () => {
        // it's counting twice, and I aint got a clue where it's counting from
        // it just CALLS this out of nowhere :(
        const flipped = document.getElementsByClassName('-flipped');
        console.log(`flipped.length: ${flipped.length}`)
        setFlippedCards((currentFlipped) => {
            const wereFlipped = [...currentFlipped];
            return wereFlipped.concat(flipped)
        });
        flipCount = flippedCards.length;
        console.log(`flipped.length: ${flipped.length}`)
        if (flippedCards.length >= 1) {
            console.log(`flippedCards.length: ${flippedCards.length}`)
            const flipTimeout = setTimeout(() => {
                console.log('timeout')
                console.log(flipped)
                Array.from(document.getElementsByClassName('-flipped')).map((element) => {
                    element.classList.remove('-flipped');
                });
                setFlippedCards([]);
                props.swapPlayer(props.currentPlayer)
            }, 800);
            // clearTimeout(flipTimeout);
        }
    }

    return(
        <GameBoard cards={currentCards} trackFlipped={trackFlipped}/>
    )
};