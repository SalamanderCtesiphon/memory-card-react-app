const Card = ({ cards, card, getClick }) => {
    return (
        <div 
            key={cards.indexOf(card)}
            className="card"
            onClick={() => getClick(card.click)}
            >{card.id}
        </div>
    )
}

export default Card