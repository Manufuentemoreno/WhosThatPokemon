import './App.css';

import React, {useState, useEffect} from 'react';
import Pokemon from './components/Pokemon';
import Options from './components/Options';

import logo from "./assets/images/International_Pokémon_logo.svg.png";
import pokeball from "./assets/images/pokeball.png";

const FX = {
  secret : {
    filter: "saturate(0) contrast(0%) brightness(0%) grayscale(0) blur(0.8px)"
  },
  showPokemon : {
    filter: "none",
    transition: "1s"
  }
};
const TOTAL_POKEMON = 184;

const randomChoice = (max)=>{
  let number = Math.floor(Math.random()*max);
  return number;
}

const getPokemons = async()=>{
  const option1 = await fetch(`https://pokeapi.co/api/v2/pokemon-form/${randomChoice(TOTAL_POKEMON)}`);
  const option2 = await fetch(`https://pokeapi.co/api/v2/pokemon-form/${randomChoice(TOTAL_POKEMON)}`);
  const option3 = await fetch(`https://pokeapi.co/api/v2/pokemon-form/${randomChoice(TOTAL_POKEMON)}`);
  const option4 = await fetch(`https://pokeapi.co/api/v2/pokemon-form/${randomChoice(TOTAL_POKEMON)}`);

  const pokemon1 = await option1.json();
  const pokemon2 = await option2.json();
  const pokemon3 = await option3.json();
  const pokemon4 = await option4.json();

  let result = [pokemon1, pokemon2, pokemon3, pokemon4]
  return result;
}

const sleep = ms => new Promise(
  resolve => setTimeout(resolve, ms)
);

function App() {
  const [ pokemonImg, setPokemonImg] = useState();
  const [ selectFx, setSelectFx ] = useState({});
  const [ allOptions, setAllOptions ] = useState([]);
  const [ playing, setPlaying ] = useState(true)
  const [ loading, setLoading ] = useState(false)
  const [ pokemonCover, setPokemonCover ] = useState(FX.secret);

  // Load Game
  useEffect(()=>{
    const right = randomChoice(3);

    getPokemons()
    .then(options => {

      setAllOptions([
      {
        name: options[0].name,
        fx: right == 0 ? {backgroundColor: "lightgreen", color: "green"} : {backgroundColor: "red"},
      },
      {
        name: options[1].name,
        fx: right == 1 ? {backgroundColor: "lightgreen", color: "green"} : {backgroundColor: "red"},
      },
      {
        name: options[2].name,
        fx: right == 2 ? {backgroundColor: "lightgreen", color: "green"} : {backgroundColor: "red"},
      },
      {
        name: options[3].name,
        fx: right == 3 ? {backgroundColor: "lightgreen", color: "green"} : {backgroundColor: "red"},
      },
    ]);
      setPokemonImg(options[right].sprites.front_default);
    }
    )

    }, [])

  // Play again
  useEffect(()=>{
    if(playing){

    const right = randomChoice(3);

    getPokemons()
    .then(options => {

      setAllOptions([
      {
        name: options[0].name,
        fx: right == 0 ? {backgroundColor: "lightgreen", color: "green"} : {backgroundColor: "red"},
      },
      {
        name: options[1].name,
        fx: right == 1 ? {backgroundColor: "lightgreen", color: "green"} : {backgroundColor: "red"},
      },
      {
        name: options[2].name,
        fx: right == 2 ? {backgroundColor: "lightgreen", color: "green"} : {backgroundColor: "red"},
      },
      {
        name: options[3].name,
        fx: right == 3 ? {backgroundColor: "lightgreen", color: "green"} : {backgroundColor: "red"},
      },
    ]);
      setPokemonImg(options[right].sprites.front_default);
    }
    )}

    }, [playing])
  
  // click button
  const handeClick = async()=>{
      setPokemonCover(FX.showPokemon);
      setPlaying(false);

      await sleep(3000);
      setPokemonCover(FX.secret)
      setPlaying(true);
  };
  
  return (
      <>
        <img className='pokemon-logo' src={logo} alt="Pokemon logo" />
        <Pokemon image={pokemonImg} fx={pokemonCover}/>
        {/* { loading ? <Options pokemons={allOptions}/> : <img className='loading' src={pokeball} /> } */}
        <Options pokemons={allOptions} playing={playing} action={handeClick}/>
      </>
    );
}

export default App;
