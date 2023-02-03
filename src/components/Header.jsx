const Header = ({ game, highScore }) => {
    return (
        <div className="header">
            <h1>Memory Game</h1>
            <div>Choose one card. If you choose the same card twice the game is over.</div>
            <p>Score: {game} | High Score: {highScore} </p>
        </div>
    )
}

export default Header