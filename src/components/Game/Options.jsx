import React from "react";
import OptionButton from "./OptionButton";

const Options = (props)=>{

    return(
        <section className="options">
            { props.playing ? 
            props.pokemons.map((pokemonOption) => 
                {return <OptionButton 
                    name={pokemonOption.name} 
                    click={props.action}
                    key={pokemonOption.name}
                    />}
             ) : props.pokemons.map((pokemonOption) => 
             {return <OptionButton 
                 name={pokemonOption.name} 
                 style={pokemonOption.fx}
                 key={pokemonOption.name}
                 />}
          ) 
                
              }

        </section>
    )
};

export default Options;