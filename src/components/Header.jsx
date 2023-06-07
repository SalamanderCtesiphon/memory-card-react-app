const Header = ({ game, highScore }) => {
    return (
        <div className="header">
            <div className="top">
                <h1>Memory Game</h1>
                <h1>Your Score: {game} | High Score: {highScore}</h1>
            </div>            
        </div>
    )
}

export default Header