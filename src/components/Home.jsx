import React from "react";
import { Outlet, Link } from "react-router-dom";
import logo from "../assets/images/InternationalPokemonLogo.webp";


const Home = ({exit})=>{

    return(
        <main className='main-body'>
            <Link to={"/"} className="top-link">
                <img className='pokemon-logo' onClick={exit} src={logo} alt="Pokemon logo" />
            </Link>
            <Outlet/>
        </main>      
    )

};

export default Home