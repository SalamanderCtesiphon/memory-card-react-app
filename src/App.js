import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Card from './components/Card';
import aNewHope from "./components/images/aNewHope.jpeg";
import empire from "./components/images/empire.jpeg";

function App(props) {
  const [game, setGame] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [cards, setCards] = useState([
    {
        id: 1,
        click: 0,
        background: <img src={aNewHope} alt="a new hope" />,
    },
    {
        id: 2,
        click:0,
        background: <img src={empire} alt=" the empire strikes back" />,
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
      setGame(game + 1);
      return card;
    });
    setCards(updatedCards);
  }

  useEffect(() => {
    [...cards].map((card) => {
      if (card.click > 1) {
        game > highScore && setHighScore(game - 1);
        setGame(0);
        [...cards].map((card) => {
          if (card.click > 0) {
            card.click = 0;
          }
          return card;
        })
      } 
    })
  });



  shuffleArray(cards);

  return (
    <div className="App">
      <Header />
      <p>Score: {game} | High Score: {highScore} </p>
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
