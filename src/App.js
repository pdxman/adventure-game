import './App.css';
import React, { useEffect, useState } from "react";
import GameStart from './gameStart'
import GameMoves from './moves'
import Battles from './Battles'
import SomethingWithStateProps from './SomethingWithStateProps'

export default function App() {

 const [state, setState] = useState({
   gold: '30',
   silver: '50'
 })

 return (
    <div className="App">
      <div className="wrapper">
        <SomethingWithStateProps {...state}/>
        <GameStart />
        <GameMoves />
        <Battles />
      </div>
    </div>
  );
}

