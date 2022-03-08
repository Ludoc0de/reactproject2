import React from "react"
import Logo from "./images/default-monochrome-black.svg"

function Header(props) {

    const burgerMenu = {
        right: props.burger ? "-50%" :"1%",
        transition: "0.5s ease-in 0.5s"
    }

    return(
        <nav>
            <img className="nav--logo" src={Logo} />
            <section className={props.burger ? "container" : "container change"} onClick={props.menuClick}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </section>
            <ul style={burgerMenu}>
                <li className="nav--list">
                    <a className="nav--link" onClick={props.handleClick}>Cartes de visite</a>
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