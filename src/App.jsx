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
const IDS_POKEMON = [1, 151];

const randomChoice = (max)=>{
  let number = Math.floor(Math.random()*(max));
  return number;
}

const pokemonsTotal = [];
for( let i=IDS_POKEMON[0]; i<=IDS_POKEMON[1]; i++){
  pokemonsTotal.push(i);
};
const pokemonsOptions = [...pokemonsTotal];

const shuffle = (array) =>{
  for (let i = array.length -1; i > 0; i--) {
      let j = Math.floor(Math.random() * i)
      let k = array[i]
      array[i] = array[j]
      array[j] = k
  };
  return array
};

const getPokemons = async(correctList, optionsList)=>{
    
  if(correctList.length >= 1){
      
      // correct answer:
      let idSelected = randomChoice(correctList.length);
      correctList.splice(idSelected, 1);
      let get = await fetch(`https://pokeapi.co/api/v2/pokemon-form/${idSelected}`);
      let PokemonCorrect = await get.json();
      
      // Options:
      let optionsToSelect = [...optionsList];
      optionsToSelect.splice(optionsToSelect.indexOf(idSelected),1); // la op correcta NO se repite en opciones

      // Op 2:
      let idSelected2 = randomChoice(optionsToSelect.length);
      optionsToSelect.splice(idSelected2, 1);
      let get2 = await fetch(`https://pokeapi.co/api/v2/pokemon-form/${idSelected2}`);
      let pokemonOp2 = await get2.json();

      // Op 3:
      let idSelected3 = randomChoice(optionsToSelect.length);
      optionsToSelect.splice(idSelected3, 1);
      let get3 = await fetch(`https://pokeapi.co/api/v2/pokemon-form/${idSelected3}`);
      let pokemonOp3 = await get3.json();

      // Op 4:
      let idSelected4 = randomChoice(optionsToSelect.length);
      optionsToSelect.splice(idSelected4, 1);
      let get4 = await fetch(`https://pokeapi.co/api/v2/pokemon-form/${idSelected4}`);
      let pokemonOp4 = await get4.json();

      let pokemons = shuffle([PokemonCorrect, pokemonOp2, pokemonOp3, pokemonOp4]);

      pokemons.push(PokemonCorrect);
      
      // pokemons[4] = The correct answer
      return pokemons;
  }else{
      // WIN!!!
  }
};

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
  
    getPokemons(pokemonsTotal, pokemonsOptions)
    .then(options => {
      setPokemonImg(options[4].sprites.front_default);
      
      setAllOptions([
      {
        name: options[0].name,
        fx: options[0].id === options[4].id ? {backgroundColor: "lightgreen", color: "green"} : {backgroundColor: "#a52d23"},
      },
      {
        name: options[1].name,
        fx: options[1].id === options[4].id ? {backgroundColor: "lightgreen", color: "green"} : {backgroundColor: "#a52d23"},
      },
      {
        name: options[2].name,
        fx: options[2].id === options[4].id ? {backgroundColor: "lightgreen", color: "green"} : {backgroundColor: "#a52d23"},
      },
      {
        name: options[3].name,
        fx: options[3].id === options[4].id ? {backgroundColor: "lightgreen", color: "green"} : {backgroundColor: "#a52d23"},
      },
    ]);
      setLoading(false)
    }
    )

    }, [])

  // Play again
  useEffect(()=>{
    if(playing){
      getPokemons(pokemonsTotal, pokemonsOptions)
        .then(options => {
      
        setPokemonImg(options[4].sprites.front_default);
      
        setAllOptions([
        {
          name: options[0].name,
          fx: options[0].id === options[4].id ? {backgroundColor: "lightgreen", color: "green"} : {backgroundColor: "#a52d23"},
        },
        {
          name: options[1].name,
          fx: options[1].id === options[4].id ? {backgroundColor: "lightgreen", color: "green"} : {backgroundColor: "#a52d23"},
        },
        {
          name: options[2].name,
          fx: options[2].id === options[4].id ? {backgroundColor: "lightgreen", color: "green"} : {backgroundColor: "#a52d23"},
        },
        {
          name: options[3].name,
          fx: options[3].id === options[4].id ? {backgroundColor: "lightgreen", color: "green"} : {backgroundColor: "#a52d23"},
        },
      ]);
        setPokemonCover(FX.secret);
      }
      )}
  }, [ playing ])
  
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
