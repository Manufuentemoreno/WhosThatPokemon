import React from "react";
import { Link } from "react-router-dom";

const SelectGame = ({exit}) =>{

    return(
        <div className="landing-box">  
            <Link to={"/marathon"}>
                <button type="button" className="option-button">Maraton</button>
            </Link>
            <Link to={"/challenge"}>
                <button type="button" className="option-button">Desafío</button>
            </Link>
            <Link to={"/"}>
                <button type="button" className="option-button button-red" onClick={exit}>Salir</button>
            </Link>
        </div>
    )
};

export default SelectGame;