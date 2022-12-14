import {useState} from "react";
import logo from '../assets/logo.png';
import './styles/Navbar.css'
import Modal from 'react-bootstrap/Modal';
import './styles/Modals.css'

function Navbar() {

    const [isActive, setActive] = useState(false);

    const open = (e) => {
        e.preventDefault();
        setActive(!isActive);
    }

    const [showLogin, setShowLogin] = useState(false);

    const handleCloseLogin = () => setShowLogin(false);
    const handleShowLogin = () => setShowLogin(true);

    const [showCreateAcc, setShowCreateAcc] = useState(false);

    const handleCloseCreateAcc = () => setShowCreateAcc(false);
    const handleShowCreateAcc = () => setShowCreateAcc(true);

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
                        <button onClick={handleShowLogin} className="navbar-button">Logare</button>
                        <Modal show={showLogin} onHide={handleCloseLogin}>
                            <Modal.Header closeButton>
                                <Modal.Title><img className="logo-modal" src={logo}></img></Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="modal-login-body">
                                    <div className="modal-login-part">
                                        <h1 className="text-modal">Welcome back!</h1>
                                        <form>
                                            <label className="label-text-modal">
                                                Nume utilizator
                                            </label><br></br>
                                            <input className="modal-input-login" type="text" value="Nume utilizator"></input><br></br>
                                            <label className="label-text-modal">
                                                Parolă
                                            </label><br></br>
                                            <input className="modal-input-login" type="text" value="Parolă"></input>
                                        </form>
                                        <button className="modal-btn modal-btn-login">Logare</button>
                                    </div>  
                                </div>
                            </Modal.Body>
                         </Modal>
                    </li>
                    <li>
                        <button onClick={handleShowCreateAcc} className="navbar-button">Creare Cont</button>
                        <Modal show={showCreateAcc} onHide={handleCloseCreateAcc}>
                            <Modal.Header closeButton>
                                <Modal.Title><img className="logo-modal" src={logo}></img></Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="modal-createaccount-body">
                                    <div className="modal-createaccount-part">
                                        <h1 className="text-modal-createacc">Welcome!</h1>
                                        <form>
                                            <label className="label-text-modal">
                                                Email
                                            </label><br></br>
                                            <input className="modal-input" type="text" value="Email"></input><br></br>
                                            <label className="label-text-modal">
                                                Nume utilizator
                                            </label><br></br>
                                            <input className="modal-input" type="text" value="Nume utilizator"></input><br></br>
                                            <label className="label-text-modal">
                                                Parolă
                                            </label><br></br>
                                            <input className="modal-input" type="text" value="Parolă"></input>
                                        </form>
                                        <button className="modal-btn">Crează cont</button>
                                    </div>
                                </div>
                            </Modal.Body>
                         </Modal>
                    </li>
                </ul>
            </div>

        </nav>
    
    </>
}

export default Navbar;
