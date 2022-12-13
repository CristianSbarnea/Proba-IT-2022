import { useRef, useState} from "react";
import logo from '../assets/logo.png';
import { FaBars, FaTimes } from "react-icons/fa";

import './styles/Navbar.css'

function Navbar() {

    const [isActive, setActive] = useState(false);

    const [isShown, setIsShown] = useState(false);

    const open = (e) => {
        e.preventDefault();
        console.log("HELOOOO");
        setActive(!isActive);
    }

    return <>
        <nav className="navbar">
            <div className="logo-name">
                <img src={logo}></img>
            </div>
            <a href="" className="toggle-button" onClick={open}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </a>
            <div className={"navbar-links" + (isActive ? " active" : "")}>
                <ul>
                    <li>
                        <button className="navbar-button">Logare</button>
                    </li>
                    <li>
                        <button className="navbar-button">Creaza Cont</button>
                    </li>
                </ul>
            </div>

        </nav>
    
    </>
}

export default Navbar;