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
  let number = Math.floor(Math.random()*(max+1));
  return number;
}

const getPokemons = async()=>{
  const option1 = await fetch(`https://pokeapi.co/api/v2/pokemon-form/${randomChoice(TOTAL_POKEMON)+1}`);
  const option2 = await fetch(`https://pokeapi.co/api/v2/pokemon-form/${randomChoice(TOTAL_POKEMON)+1}`);
  const option3 = await fetch(`https://pokeapi.co/api/v2/pokemon-form/${randomChoice(TOTAL_POKEMON)+1}`);
  const option4 = await fetch(`https://pokeapi.co/api/v2/pokemon-form/${randomChoice(TOTAL_POKEMON)+1}`);

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
  const [ allOptions, setAllOptions ] = useState([]);
  const [ playing, setPlaying ] = useState(true)
  const [ loading, setLoading ] = useState(true)
  const [ pokemonCover, setPokemonCover ] = useState(FX.secret);

  // Load Game
  useEffect(()=>{
    const right = randomChoice(3);

    getPokemons()
    .then(options => {

      setAllOptions([
      {
        name: options[0].name,
        fx: right === 0 ? {backgroundColor: "lightgreen", color: "green"} : {backgroundColor: "#a52d23"},
      },
      {
        name: options[1].name,
        fx: right === 1 ? {backgroundColor: "lightgreen", color: "green"} : {backgroundColor: "#a52d23"},
      },
      {
        name: options[2].name,
        fx: right === 2 ? {backgroundColor: "lightgreen", color: "green"} : {backgroundColor: "#a52d23"},
      },
      {
        name: options[3].name,
        fx: right === 3 ? {backgroundColor: "lightgreen", color: "green"} : {backgroundColor: "#a52d23"},
      },
    ]);
      setPokemonImg(options[right].sprites.front_default);
      setLoading(false)
    }
    )

    }, [])

  // Play again
  useEffect(()=>{
    if(playing){const right = randomChoice(3);
    setPokemonImg("")
    setAllOptions([]);

    getPokemons()
    .then(options => {

      setAllOptions([
      {
        name: options[0].name,
        fx: right === 0 ? {backgroundColor: "lightgreen", color: "green"} : {backgroundColor: "#a52d23"},
      },
      {
        name: options[1].name,
        fx: right === 1 ? {backgroundColor: "lightgreen", color: "green"} : {backgroundColor: "#a52d23"},
      },
      {
        name: options[2].name,
        fx: right === 2 ? {backgroundColor: "lightgreen", color: "green"} : {backgroundColor: "#a52d23"},
      },
      {
        name: options[3].name,
        fx: right === 3 ? {backgroundColor: "lightgreen", color: "green"} : {backgroundColor: "#a52d23"},
      },
    ]);
      setPokemonCover(FX.secret);
      setPokemonImg(options[right].sprites.front_default);
    }
    )}}, [ playing ])
  
  // click button
  const handeClick = async(event)=>{
      event.target.style.border = "5px solid #fc0";
      event.target.style.boxShadow = "0px 5px 22px -6px rgba(0,0,0,0.78)";
      setPokemonCover(FX.showPokemon);
      setPlaying(false);

      await sleep(3000);
      setPlaying(true);
  };
  
  return (
      <>
        <img className='pokemon-logo' src={logo} alt="Pokemon logo" />
        <Pokemon image={pokemonImg} fx={pokemonCover}/>
        { loading ? <img className='loading' alt='Loading' src={pokeball} /> :  <Options pokemons={allOptions} playing={playing} action={handeClick}/> }
      </>
    );
}

export default App;
