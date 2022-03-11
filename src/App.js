import './App.css';
import React, { Component, useEffect, useState } from 'react';
import Game from './components/game';
import Instructions from './components/instructions';
import Scoreboard from './components/scoreboard';
import cuphead from './images/cuphead-card.png';
import kingDice1 from './images/king-dice-1.png';
import kingDice2 from './images/king-dice-2.png';
import mdhrShield from './images/mdhr-shield.png';
import mdhr from './images/mdhr.png';
import mugman from './images/mugman.png';


function App(props) {
  
  const [cardArray, setCardArray] = useState([
    { num:1, image: cuphead },
    { num:2, image: kingDice1 },
    { num:3, image: kingDice2 },
    { num:4, image: mdhrShield },
    { num:5, image: mdhr }, 
    { num:6, image: mugman }
  ])
  const [currentScore, setCurrentScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)

  const [usedCardArray, setUsedCardArray] = useState([])

  useEffect(() => {
    if (currentScore > bestScore) {
      setBestScore(bestScore => bestScore = currentScore)
    }
  }, [currentScore, bestScore])

  const randomiseArray = function() {
    const shuffled = cardArray.sort(() => Math.random() -0.5)
    setCardArray([...shuffled])
  }

  const updateScore = function() {
    setCurrentScore(prevState => prevState + 1)

  }

  const chooseCard = function(e) {
    let num = e.target.getAttribute('num')
    let card = cardArray.filter(item => item.num == num)
    // if card is already in the used card array, trigger game over, else add to used card array
    let alreadyClicked = checkIfInUsedCardArray(card[0])
    if (!alreadyClicked) {
      setUsedCardArray(usedCardArray => usedCardArray.concat(card[0]))
      randomiseArray();
      updateScore()
    } else {
      gameOver();
    }
  }

  const checkIfInUsedCardArray = function(card) {
    return usedCardArray.find(element => element.num == card.num)
  }

  const gameOver = function() {
    randomiseArray();
    setUsedCardArray([])
    setCurrentScore(0)
    console.log('game over!!!!')
    document.querySelector('.gameOver').classList.toggle('hidden')
    setTimeout(() => document.querySelector('.gameOver').classList.toggle('hidden'), 800 )
  }

  return (
    <div>
      <div className='gameOver hidden'> GAME OVER</div>
      <div className='gameInfo'>
        <Instructions/>
        <Scoreboard currentScore={currentScore} bestScore={bestScore} />
      </div>
      <Game cardArray={cardArray} shuffler={chooseCard}/>
    </div>
  );
}

export default App;
