const GameField = () => {
    const gameArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

    return (
        <div className="game-field">
           {gameArray.map((i) => {
            return (
                <div 
                key={gameArray.indexOf(i)}
                className="card"
                >{i}</div>
            )
           })}
        </div>
    )
}

export default GameField