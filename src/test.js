// https://bulbapedia.bulbagarden.net/wiki/Generation#:~:text=To%20date%2C%20there%20are%20eight,own%20quirks%20into%20the%20franchise.

const pokemonsTotal = [];
for( let i=IDS_POKEMON[0]; i<=IDS_POKEMON[1]; i++){
  pokemonsTotal.push(i);
};
const pokemonsOptions = [...pokemonsTotal];

const selectPokemon = async(list) => {
  if(list.length >= 1){
      let idSelected = randomChoice(list.length);
      list.splice(idSelected, 1);
      let get = await fetch(`https://pokeapi.co/api/v2/pokemon-form/${idSelected}`);
      let data = await get.json();
      return data;
  }else{
      let data = "ganaste";
      return data;
  }
};

const selectPokemonOption = async(list) =>{
  let idSelected = randomChoice(list.length);
  let get = await fetch(`https://pokeapi.co/api/v2/pokemon-form/${idSelected}`);
  let data = await get.json();
  return data;
}

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

        pokemons.push(idSelected);
        
        return pokemons;
    }else{
        // WIN!!!
    }
};





  let options = [...pokemonsOptions];
  const pokemon1 = await selectPokemon(pokemonsTotal);
  const pokemon2 = await selectPokemon(options);
  const pokemon3 = await selectPokemon(options);
  const pokemon4 = await selectPokemon(options);

  let result = [pokemon1, pokemon2, pokemon3, pokemon4]


const shuffle = (array) =>{
  for (let i = array.length -1; i > 0; i--) {
      let j = Math.floor(Math.random() * i)
      let k = array[i]
      array[i] = array[j]
      array[j] = k
  };
  return array
};

const sleep = ms => new Promise(
  resolve => setTimeout(resolve, ms)
);
