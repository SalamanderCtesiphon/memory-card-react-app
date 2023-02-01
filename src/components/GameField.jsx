const GameField = () => {
    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

    function shuffleArray(cards) {
        cards.sort(() => Math.random() - 0.25);
    }

    shuffleArray(cards);

    return (
        <div className="game-field">
           {cards.map((i) => {
            return (
                <div 
                key={cards.indexOf(i)}
                className="card"
                >{i}</div>
            )
           })}
        </div>
    )
}

export default GameField