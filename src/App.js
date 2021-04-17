import './App.css';
import React, { useEffect, useState } from "react";
import GameStart from './gameStart'
import GameMoves from './moves'
import Battles from './Battles'
import Status from './Status'
import SomethingWithStateProps from './SomethingWithStateProps'

export default function App() {

const [health, setHealth] = useState(20)
const [fire, setFire] = useState(50)
const [food, setFood] = useState(100)

 return (
    <div className="App">
      <div className="wrapper">
        <Status health={health} fire={fire} food={food}/>
        <GameStart />
        <GameMoves />
        <Battles />
      </div>
    </div>
  );
}

