import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';

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
    setClick(click + 1);
  }



  shuffleArray(cards);

  return (
    <div className="App">
      <Header />
      <div className="game-field">
           {cards.map((card) => {
            return (
                <div 
                key={cards.indexOf(card)}
                className="card"
                onClick={getClick}
                >{card.id}</div>
            )
           })}
        </div>
    </div>
  );
}

export default App;
