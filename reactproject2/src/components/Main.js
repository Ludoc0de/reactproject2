import React from "react"
import Heroe from "../images/DrawKit.png"


function Main(){
    return(
        <section>
            <h1>Votre carte de visite Digitale !</h1>
            <img className="hero--image" src={Heroe} />
        </section>
        
    )
}

export default Main