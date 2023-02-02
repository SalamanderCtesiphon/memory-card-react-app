import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Card from './components/Card';

function App(props) {
  const [click, setClick] = useState(0);
  const [cards, setCards] = useState([
    {
        id: 1,
        click: 0,
    },
    {
        id: 2,
        click:0,
    },
    {
        id: 3, 
        click: 0,
    },
    {
        id: 4,
        click: 0,
    },
    {
        id: 5,
        click: 0,
    },
    {
        id: 6,
        click: 0,
    },
    {
        id: 7,
        click: 0,
    }, 
    {
        id: 8,
        click: 0,
    },
    {
        id: 9,
        click: 0,
    },
    {
        id: 10,
        click: 0,
    },
    {
        id: 11,
        click: 0,
    },
    {
        id: 12, 
        click: 0,
    } 
  ]);

  function shuffleArray(cards) {
    cards.sort(() => Math.random() - 0.25);
  }

  
  function getClick(id) {
    const updatedCards = [...cards].map((card) => {
      if (card.id === id) {
        card.click = 2;
      }
      return card;
    });
    setCards(updatedCards);
  }



  shuffleArray(cards);

  return (
    <div className="App">
      <Header />
      <div className="game-field">
           {cards.map((card) => {
            return (
                <Card
                key={card.id}
                cards={cards}
                card={card}
                getClick={getClick}
                />
            )
           })}
        </div>
    </div>
  );
}

export default App;
