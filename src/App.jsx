import './App.css';

import React, {useState} from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Languaje from './components/Languaje';
import SelectMode from './components/SelectMode';
import Footer from './components/Footer';


import logo from "./assets/images/International_Pokémon_logo.svg.png";
import backImage from "./assets/images/back-game.png";
import Landing from './components/Landing';

const texts = {
  english: {
    languaje: "english",
    title: "Guess who´s that pokemon",
    choose: "Choose how many pokemons do you want:",
    gen: "Up to Generation ",
    finishGame: "Finish Game",
    footerDesign: "Designed and developed by Manu Fuente Moreno",
    footerReact: "Created with React JS",
    footerApi: "Using the"
  },
  spanish: {
    languaje: "español",
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
  const [ languaje, setLanguaje ] = useState(texts.english);
  const [ gameMode, setGameMode ] = useState(0);

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

  const router = createBrowserRouter([
    {
      path: "/",
      element: <SelectMode/>,
      // errorElement: <ErrorPage/>,
    },
    {
      path: "/marathon",
      element: <Landing texts={texts}/>
    }
  ]);

  return (
      <React.Fragment>
        <Languaje english={changeEnglish} spanish={changeSpanish} languaje={languaje}/>
        <main className='main-body'>
        <img className='pokemon-logo' src={logo} alt="Pokemon logo" onClick={endGame} />

        {/* <SelectMode/> */}
        <RouterProvider router={router} />


        {/* <img src={backImage} className="background" alt="background"/>
        <img src={backImage} className="background-2" alt="background-2"/> */}
        </main>
        <Footer texts={languaje}/>
      </React.Fragment>
    );
}

export default App;
