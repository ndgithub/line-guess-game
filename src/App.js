import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { Game } from './components/Game.js';
import { Welcome } from './components/Welcome.js';
import { Goodbye } from './components/Goodbye.js';

function App() {

  const [count, setCount] = useState(0);
  const [round, setRound] = useState(0);
  const [lines, setLines] = useState(0);

  function onSubmit() {

  }


  switch (round) {
    case 0: return <Welcome onStart={() => setRound(1)} />
      break;
    case 5: <Goodbye />
      break;
    default: return <Game onSubmit={onSubmit} />
  }


}

export default App;
