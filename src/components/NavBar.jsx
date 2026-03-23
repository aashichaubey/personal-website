import React from 'react';
import './NavBar.css';
import logo from '/logo.png';

function NavBar() {
    return (
        <nav className="navbar">
            <img src={logo} alt="logo" className="nav-logo-img" />
            <ul className="nav-links">
                <li><a href="#about" className="nav-link active">about</a></li>
            </ul>
        </nav>
    );
}

export default NavBar;
