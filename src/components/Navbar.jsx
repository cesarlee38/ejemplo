import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
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
            <nav className="navbar navbar-expand bg-light">
                <div className="container-fluid">
                    <Link className='navbar-brand' to='./'>
                        <img src={logo} alt="Inicio" width="50" height="24" />
                    </Link>
                    <div className="navbar-collapse collapse" id="navbarNav">
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