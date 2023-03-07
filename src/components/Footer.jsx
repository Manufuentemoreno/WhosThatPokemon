import React from "react";
import { FaReact, FaGithub, FaLinkedin, FaFolder, FaEnvelope } from "react-icons/fa";

const Footer = (languaje)=>{
    let texts = {};

    if(languaje===0){
        texts = {
            footerDesign: "Designed and developed by Manu Fuente Moreno",
            footerReact: "Created with React JS",
            footerApi: "Using the"
        }
    }else{
        texts = {
            footerDesign: "Diseñado y desarrollado por Manu Fuente Moreno",
            footerReact: "Creado con React JS",
            footerApi: "Utilizando la"
        }
    };

    return(
        <footer className="footer">
            <section className="footer-title">
                <p className="footer-text" style={{fontWeight: 300}}>{texts.footerDesign}</p>
            </section>
            <section className="footer-data">
                <p className="footer-text">{texts.footerReact}<FaReact/></p>
                <p className="footer-text">{texts.footerApi}<a target="_blank" rel="noreferrer" href="https://pokeapi.co/"><img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt="pokeApi"/></a></p>
            </section>
            <section className="footer-data">
                <a target="_blank" rel="noreferrer" href="mailto:manufuentemoreno@gmail.com"><FaEnvelope/><p className="footer-text">  manufuentemoreno@gmail.com</p></a>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/manuel-fuente-moreno/"><FaLinkedin/><p className="footer-text">  LinkedIn</p></a>
                <a target="_blank" rel="noreferrer" href="https://github.com/Manufuentemoreno"><FaGithub/><p className="footer-text">  GitHub</p></a>
                <a target="_blank" rel="noreferrer" href="https://manufuentemorenodev.web.app"><FaFolder/><p className="footer-text">  Portfolio</p></a>
            </section>
        </footer>
    )
};

export default Footer;