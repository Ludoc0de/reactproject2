import React from "react"
import Logo from "../images/default-monochrome-black.svg"

function Header() {
    return(
        <nav>
            <img className="nav--logo" src={Logo} />
            <ul>
                <li className="nav--list">
                    <a className="nav--link" href="test">Cartes de visite</a>
                </li>
                <li className="nav--list">
                    <a className="nav--link">Nos services</a>
                </li>
                <li className="nav--list">
                    <a className="nav--link">Contact</a>
                </li>
            </ul>
            
        </nav>
    )
}

export default Header