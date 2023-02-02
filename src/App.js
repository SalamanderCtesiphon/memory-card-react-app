import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Card from './components/Card';
import { click } from '@testing-library/user-event/dist/click';

function App(props) {
  const [game, setGame] = useState(0);
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
        card.click = card.click + 1;
      }
      return card;
    });
    setCards(updatedCards);
  }

  useEffect(() => {
    [...cards].map((card) => {
      if (card.click > 1) {
        alert('gameover');
      } 
    })
  });



  shuffleArray(cards);

  return (
    <div className="App">
      <Header />
      <p>Score: {game} | High Score: 0 </p>
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
