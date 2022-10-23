import './App.css';

import React, {useState} from 'react';
import Languaje from './components/Languaje';
import Landing from "./components/Landing";
import Game from './components/Game';
import Footer from './components/Footer';

import logo from "./assets/images/International_Pokémon_logo.svg.png";
import backImage from "./assets/images/back-game.png";

const texts = {
  english: {
    title: "Guess who´s that pokemon",
    choose: "Choose how many pokemons do you want:",
    gen: "Up to Generation ",
    finishGame: "Finish Game",
    footerDesign: "Designed and developed by Manu Fuente Moreno",
    footerReact: "Created with React JS",
    footerApi: "Using the"
  },
  spanish: {
    title: "Adivina quién es ese Pokemon",
    choose: "Elige cuántos pokemons quieres:",
    gen: "Hasta la generación ",
    finishGame: "Finalizar Juego",
    footerDesign: "Diseñado y desarrollado por Manu Fuente Moreno",
    footerReact: "Creado con React JS",
    footerApi: "Utilizando la"
  }
}

function App() {
  const [ gameHasStarted, setGameHasStarted ] = useState(false);
  const [ pokemonNumber, setPokemonNumber ] = useState(0);
  const [ languaje, setLanguaje ] = useState(texts.english)

  const configPokemonNumber = (event)=>{  
    setPokemonNumber(event.currentTarget.value); 
    setGameHasStarted(true);
  }

  const endGame = ()=>{
    setGameHasStarted(false)
  }

  const changeEnglish = ()=>{
    setLanguaje(texts.english)
  };

  const changeSpanish = ()=>{
    setLanguaje(texts.spanish)
  }

  
  return (
      <React.Fragment>
        <Languaje english={changeEnglish} spanish={changeSpanish}/>
        <main className='main-body'>
        <img className='pokemon-logo' src={logo} alt="Pokemon logo" onClick={endGame} />

        { !gameHasStarted ? 
          <Landing select={configPokemonNumber} texts={languaje}/> : 
          <Game PokemonNumber={pokemonNumber} end={endGame} texts={languaje}/>
        }
        <img src={backImage} className="background" alt="background"/>
        <img src={backImage} className="background-2" alt="background-2"/>
        </main>
        <Footer texts={languaje}/>
      </React.Fragment>
    );
}

export default App;
