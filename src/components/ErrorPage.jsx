import React from "react";
import { Link } from "react-router-dom";
import pikachuGif from "../assets/images/pikachu.gif";

const ErrorPage = (props) =>{
    return(
        <main className='main-body'>
            <h3 className="chooseNumber">Página no encontrada</h3>
            <Link to={"/"} className="error-box">
                <img src={pikachuGif} alt="pikachu" className="error-image"/>
                <p className="error-text">Volver a la Home</p>
            </Link>
        </main>
    )
};

export default ErrorPage;