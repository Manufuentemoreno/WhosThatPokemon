import React, {useState, useEffect} from "react";
import Pokemon from './Pokemon';
import Options from './Options';

import pokeball from "../assets/images/pokeball.png";

const FX = {
    secret : {
      filter: "saturate(0) contrast(0%) brightness(0%) grayscale(0) blur(0.8px)"
    },
    showPokemon : {
      filter: "none",
      transition: "1s"
    }
};

const randomChoice = (max)=>{
    let number = Math.floor(Math.random()*(max));
    return number;
};

const shuffle = (array) =>{
  array.sort(function(a,b){return 0.5 - Math.random()});
  return array;
}

const sleep = ms => new Promise(
resolve => setTimeout(resolve, ms)
);

const Game = (props)=>{
    const IDS_POKEMON = [1, props.PokemonNumber];
   
    const pokemonsTotal = [];
    for( let i=IDS_POKEMON[0]; i<=IDS_POKEMON[1]; i++){
    pokemonsTotal.push(i);
    };
    const pokemonsOptions = [...pokemonsTotal];

    const [ correctOptions, setCorrectOptions ] = useState(pokemonsTotal);
    const [ pokemonImg, setPokemonImg] = useState();
    const [ allOptions, setAllOptions ] = useState([]);
    const [ playing, setPlaying ] = useState(true)
    const [ loading, setLoading ] = useState(true)
    const [ pokemonCover, setPokemonCover ] = useState(FX.secret);
    const [ correct, setCorrect ] = useState()
    const [ score, setScore ] = useState(0);
  

    const getPokemons = async(correctList, optionsList)=>{
    
      if(correctList.length >= 1){
    
          // correct answer:
          let pokemonIdSelected = correctList[randomChoice(correctList.length)];
          correctList.splice(correctList.indexOf(pokemonIdSelected), 1);
          let get = await fetch(`https://pokeapi.co/api/v2/pokemon-form/${pokemonIdSelected}`);
          let PokemonCorrect = await get.json();
          
          // Options:
          let optionsToSelect = [...optionsList];
          optionsToSelect.splice(optionsToSelect.indexOf(pokemonIdSelected),1); // la op correcta NO se repite en opciones
    
          // Op 2:
          let pokemonIdSelected2 = optionsToSelect[randomChoice(optionsToSelect.length)];
          optionsToSelect.splice(optionsToSelect.indexOf(pokemonIdSelected2),1);
          let get2 = await fetch(`https://pokeapi.co/api/v2/pokemon-form/${pokemonIdSelected2}`);
          let pokemonOp2 = await get2.json();
    
          // Op 3:
          let pokemonIdSelected3 = optionsToSelect[randomChoice(optionsToSelect.length)];
          optionsToSelect.splice(optionsToSelect.indexOf(pokemonIdSelected3),1);
          let get3 = await fetch(`https://pokeapi.co/api/v2/pokemon-form/${pokemonIdSelected3}`);
          let pokemonOp3 = await get3.json();
    
          // Op 4:
          let pokemonIdSelected4 = optionsToSelect[randomChoice(optionsToSelect.length)];
          optionsToSelect.splice(optionsToSelect.indexOf(pokemonIdSelected4),1);
          let get4 = await fetch(`https://pokeapi.co/api/v2/pokemon-form/${pokemonIdSelected4}`);
          let pokemonOp4 = await get4.json();
    
          let pokemons = [PokemonCorrect, pokemonOp2, pokemonOp3, pokemonOp4];
          pokemons = shuffle(pokemons);
    
          pokemons.push(PokemonCorrect);
          
          // pokemons[4] = The correct answer
          setCorrectOptions(correctList);
          return pokemons;
      }else{
          console.log("GANASTE")
      }
    };

    // Load Game
    useEffect(()=>{

      console.log(score)

      if(playing){
        getPokemons(correctOptions, pokemonsOptions)
          .then(options => {
        
          setPokemonImg(options[4].sprites.front_default);
          setCorrect(options[4].name)

        
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
          setLoading(false)
        }
        )}
    }, [ playing, correctOptions])
    
    // click button choice 
    const handeClick = async(event)=>{
        event.target.style.border = "5px solid #fc0";
        event.target.style.boxShadow = "0px 5px 22px -6px rgba(0,0,0,0.78)";
        setPokemonCover(FX.showPokemon);
        setPlaying(false);

        if(event.target.innerHTML == correct){
          setScore(score => score+1);
        }
        
        
        await sleep(2500);
        event.target.style.boxShadow = "none";
        event.target.style.border = "";
        event.target.style.backgroundColor = "#a52d23";
        event.target.style.color = "white";
        setPlaying(true);
    };


    return(
        <div className="game">
            <Pokemon image={pokemonImg} fx={pokemonCover}/>
            { loading ? 
            <img className='loading' alt='Loading' src={pokeball} /> :
            <Options pokemons={allOptions} playing={playing} action={handeClick}/> }
        </div>
    )
};

export default Game;