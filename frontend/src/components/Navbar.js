import { useRef } from "react";
import logo from '../assets/logo.png';
import { FaBars, FaTimes } from "react-icons/fa";
import './styles/Navbar.css'

function Navbar() {

    const navRef = useRef();
    
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return <>
        <header>
            <img classname="navbar-logo"src={logo} alt="logo"></img>
            <nav ref = {navRef}>
            <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes />
            </button>
            <button className="account-btn login-btn">Logare</button>
            <button className="account-btn create-account-btn">Creare cont</button>
            </nav>
            <button className="nav-btn nav-open-btn" onClick={showNavbar}>
                    <FaBars />
            </button>
        </header>
    
    </>
}

export default Navbar;