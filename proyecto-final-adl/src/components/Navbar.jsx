import "./Navbar.css";

import { NavLink } from "react-router-dom";
import { useContext } from "react";

const Navbar = () => {
    return (
        // create a sticky top, transparent navbar with a logo and four links on the left and a register button on the right
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                    <img
                        src="https://i.ibb.co/7QpKsCX/logo.png"
                        alt="logo"
                        width="30"
                        height="24"
                        className="d-inline-block align-text-top"
                    />
                    <span className="logo-text">Adopta un Lobo</span>
                </NavLink>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink
                                className="nav-link"
                                aria-current="page"
                                to="/"
                            >
                                Inicio
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">
                                Acerca de
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">
                                Contacto
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/login">
                                Iniciar sesión
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        
    );
};

export default Navbar;
