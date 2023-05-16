import React from 'react'
import '../assets/css/bootstrap.css'
import logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom'

const centrarNavbar = {
    position: "absolute",
    left: "50%",
    transform: "translatex(-50%)"
}

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-sm bg-light">
                <div className="container-fluid">
                    <Link className='navbar-brand' to='./'>
                        <img src={logo} alt="Inicio" width="50" height="24" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav" style={centrarNavbar}>
                            <li className="nav-item">
                                <Link className="nav-link active" to='/'>Inicio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/Productos'>Productos</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/About'>About</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar