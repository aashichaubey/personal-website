import React from 'react';
import './Intro.css';
import university from '/public/uw.png';
import senpilot from '/public/senpilot_logo.jpeg';

function Intro() {
    return (
        <div className="intro">
            <p className="greeting fade-in" style={{ animationDelay: '0ms' }}>hey, I'm aashi</p>
            <p className="bio fade-in" style={{ animationDelay: '150ms' }}>
                computer engineering @ <img src={university} alt="UW" className="intro-icon" /><a href="https://uwaterloo.ca/" target="_blank" rel="noopener noreferrer" className="intro-link"> university of waterloo</a>
            </p>
            <p className="bio fade-in" style={{ animationDelay: '300ms' }}>
                currently @ <img src={senpilot} alt="Senpilot" className="intro-icon-square" /><a href="https://www.senpilot.com" target="_blank" rel="noopener noreferrer" className="intro-link">senpilot</a>, building field app
            </p>
            <p className="bio fade-in" style={{ animationDelay: '450ms' }}>
                interested in ai and autonomous systems
            </p>
        </div>
    );
}

export default Intro;
