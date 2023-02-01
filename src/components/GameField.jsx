import React, { useState } from "react";

const GameField = () => {
    const [count, setCount] = useState(0);
    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

    function shuffleArray(cards) {
        cards.sort(() => Math.random() - 0.25);
    }

    shuffleArray(cards);

    function getClick() {
        setCount(count + 1);
    }

    return (
        <div className="game-field">
           {cards.map((i) => {
            return (
                <div 
                key={cards.indexOf(i)}
                className="card"
                onClick={getClick}
                >{i}</div>
            )
           })}
        </div>
    )
}

export default GameField