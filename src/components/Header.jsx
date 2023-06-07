const Header = ({ game, highScore }) => {
    return (
        <div className="header">
            <div className="top">
                <h1>Memory Game</h1>
                <h1>Score: {game} | High Score: {highScore}</h1>
            </div>
            <div>Choose one card. If you choose the same card twice the game is over.</div>
            
        </div>
    )
}

export default Header