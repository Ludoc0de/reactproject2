import React from "react"
// import HeroImg from "../images/DrawKit.png"


function Hero(){
    return(
        <section className="hero" style={{opacity:1}}>
            <span className="hero--subsection">
                <h1 className="hero--title">Carte de visite digital</h1>
                <p className="hero--text">Créer votre carte digital professionel</p> 
                <button>Contact</button>
            </span>
            <div className="hero--image"></div>
            <ul className="hero--unlist">
                <li className="hero--list">
                    <a href="#">
                        <i className="fab fa-instagram"></i>
                    </a>
                </li>
                <li className="hero--list">
                    <a href="#">
                        <i className="fab fa-twitter"></i>
                    </a>
                </li>
                <li className="hero--list">
                    <a href="#">
                        <i className="fab fa-github"></i>
                    </a>
                </li>
            </ul>
        </section>
        
    )
}

export default Hero