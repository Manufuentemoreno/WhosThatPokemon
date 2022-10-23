import React from "react";
import { FaReact, FaGithub, FaLinkedin, FaFolder, FaEnvelope } from "react-icons/fa";

const Footer = (props)=>{
    return(
        <footer className="footer">
            <section className="footer-title">
                <p className="footer-text" style={{fontWeight: 300}}>{props.texts.footerDesign}</p>
            </section>
            <section className="footer-data">
                <p className="footer-text">{props.texts.footerReact}<FaReact/></p>
                <p className="footer-text">{props.texts.footerApi}<a target="_blank" rel="noreferrer" href="https://pokeapi.co/"><img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt="pokeApi"/></a></p>
            </section>
            <section className="footer-data">
                <a target="_blank" rel="noreferrer" href="mailto:manufuentemoreno@gmail.com"><FaEnvelope/><p className="footer-text">  manufuentemoreno@gmail.com</p></a>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/manuel-fuente-moreno/"><FaLinkedin/><p className="footer-text">  LinkedIn</p></a>
                <a target="_blank" rel="noreferrer" href="https://github.com/Manufuentemoreno"><FaGithub/><p className="footer-text">  GitHub</p></a>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/manuel-fuente-moreno/"><FaFolder/><p className="footer-text">  Portfolio</p></a>
            </section>
        </footer>
    )
};

export default Footer;