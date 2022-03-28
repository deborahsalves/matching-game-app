import React from "react";
import './CardGame.css';

export const CardGame = (props) => {
    return(
        <div className="card-game">
            <img
                className="card-image"
                src={props.src}
                alt={props.alt}
            />
        </div>
    );
};