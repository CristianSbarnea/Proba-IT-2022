import React, {useState} from 'react';
import './styles/ModalLogin.css'

export default function ModalLogin() {

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    }

    if (modal) {
        document.body.classList.add('active-modal');
    } else {
        document.body.classList.remove('active-modal');
    }

    return <>

        {/* <button className="btn-modal" 
        onClick={toggleModal}>
            Open
        </button> */}

        {modal && (
            <div className='modal'>
                <div onClick={toggleModal} className='modal-overlay'></div>
                <div className='modal-content'>
                    <h2>Hello Modal</h2>
                    <p>lorem</p>
                    <button className="close-modal"onClick={toggleModal}>Close</button>
                </div>
            </div>
        )}
        
    </>
}