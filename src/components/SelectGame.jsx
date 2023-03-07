import React from "react";
import { Link } from "react-router-dom";

const SelectGame = ({exit}) =>{

    return(
        <>  
            <Link to={"/marathon"}>
                <button type="button" className="option-button">Maraton</button>
            </Link>
            <Link to={"/challenge"}>
                <button type="button" className="option-button">Desafío</button>
            </Link>
            <Link to={"/"}>
                <button type="button" className="option-button" onClick={exit}>Salir</button>
            </Link>
        </>
    )
};

export default SelectGame;