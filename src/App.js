import './App.css';
import React, { useEffect, useState } from "react";
import GameStart from './gameStart'
import GameMoves from './moves'

export default function App() {

 return (
    <div className="App">
     <GameStart />
     <GameMoves />
    </div>
  );
}

