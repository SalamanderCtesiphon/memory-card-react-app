const Card = ({ cards, card, getClick }) => {
    return (
        <div 
            className="card"
            onClick={() => getClick(card.id)}
            >{card.id}
        </div>
    )
}

export default Card