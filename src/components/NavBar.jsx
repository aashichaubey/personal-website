import React from 'react';
import './NavBar.css';


function NavBar() {
    return (
        <nav className="navbar">
            <div className="nav-logo">Aashi Chaubey</div>
            <ul className="nav-links">
                <li><a href="#about" className="nav-link active">about</a></li>
            </ul>
        </nav>
    );
}

export default NavBar;
