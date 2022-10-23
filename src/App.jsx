import './App.css';

import React, {useState} from 'react';
import Landing from "./components/Landing";
import Game from './components/Game';
import Footer from './components/Footer';

import logo from "./assets/images/International_Pokémon_logo.svg.png";
import backImage from "./assets/images/back-game.png";


function App() {
  const [ gameHasStarted, setGameHasStarted ] = useState(false);
  const [ pokemonNumber, setPokemonNumber ] = useState(0)

  const configPokemonNumber = (event)=>{  
    setPokemonNumber(event.currentTarget.value); 
    setGameHasStarted(true);
  }

  const endGame = ()=>{
    setGameHasStarted(false)
  }
  
  return (
      <React.Fragment>
        <main className='main-body'>
        <img className='pokemon-logo' src={logo} alt="Pokemon logo" onClick={endGame} />

        { !gameHasStarted ? 
          <Landing select={configPokemonNumber} /> : 
          <Game PokemonNumber={pokemonNumber} end={endGame}/>
        }
        <img src={backImage} className="background" alt="background"/>
        <img src={backImage} className="background-2" alt="background-2"/>
        </main>
        <Footer/>
      </React.Fragment>
    );
}

export default App;
