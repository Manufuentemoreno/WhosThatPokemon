import './App.css';

import React, {useState, useEffect} from 'react';
import Landing from "./components/Landing";
import Game from './components/Game';

import logo from "./assets/images/International_Pokémon_logo.svg.png";
import backImage from "./assets/images/back-game.png";


function App() {
  const [ gameHasStarted, setGameHasStarted ] = useState(false);
  const [ pokemonNumber, setPokemonNumber ] = useState(0)

  const configPokemonNumber = (event)=>{  
    setPokemonNumber(event.currentTarget.value); 
    setGameHasStarted(true);
  }

  const reset = ()=>{
    setGameHasStarted(false)
  }
  
  return (
      <React.Fragment>
        <img className='pokemon-logo' src={logo} alt="Pokemon logo" onClick={reset} />

        { !gameHasStarted ? 
          <Landing select={configPokemonNumber} /> : 
          <Game PokemonNumber={pokemonNumber}/>
        }
        <img src={backImage} className="background" alt="background"/>
        <img src={backImage} className="background-2" alt="background-2"/>
      </React.Fragment>
    );
}

export default App;
