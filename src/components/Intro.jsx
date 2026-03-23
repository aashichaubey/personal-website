import React from 'react';
import './Intro.css';
import university from '/public/uw.png';
import shopify from '/public/shopify.png';

function Intro() {
    return (
        <div className="intro">
            <p className="greeting">hey, I'm aashi</p>
            <p className="bio">
                computer engineering @ <img src={university} alt="UW" className="intro-icon" /><a href="https://uwaterloo.ca/" target="_blank" rel="noopener noreferrer" className="intro-link"> university of waterloo</a><br />
                currently @ <img src={shopify} alt="Shopify" className="intro-icon" /><a href="https://www.shopify.com" target="_blank" rel="noopener noreferrer" className="intro-link">shopify</a>, building <a href="https://www.shopify.com/ca/shop-campaigns" className="inline-link" target="_blank" rel="noopener noreferrer">shop campaigns</a><br />
                interested in ai and autonomous systems
            </p>
        </div>
    );
}

export default Intro;
