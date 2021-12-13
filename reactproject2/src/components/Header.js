import React from "react"
import Logo from "../images/logo.jpg"

function Header() {
    return(
        <nav>
            <img className="nav--logo" src={Logo} />
            <p> Carte de visite</p>
        </nav>
    )
}

export default Header