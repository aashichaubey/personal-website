import React from 'react';
import './Experience.css';
import blueprint from '/public/blueprint.jpeg';
import motorola from '/public/motorola.png';
import interac from '/public/interac.png';

function Experience() {
    return (
        <div className="experience">
            <h3 className="section-title">previously...</h3>
            <ul className="experience-list">
                <li><span className="exp-arrow">&#x21B3;</span> project developer part time @<img src={blueprint} alt="UW Blueprint" className="exp-logo" /><a href="https://uwblueprint.org/" target="_blank" rel="noopener noreferrer" className="exp-link">uw blueprint</a></li>
                <li><span className="exp-arrow">&#x21B3;</span> software developer co-op @<img src={motorola} alt="Motorola Solutions" className="exp-logo" /><a href="https://www.motorolasolutions.com/en_us.html" target="_blank" rel="noopener noreferrer" className="exp-link">motorola solutions</a></li>
                <li><span className="exp-arrow">&#x21B3;</span> innovation developer intern @<img src={interac} alt="Interac Corp" className="exp-logo" /><a href="https://www.interac.ca/" target="_blank" rel="noopener noreferrer" className="exp-link">interac corp</a></li>
            </ul>
        </div>
    );
}

export default Experience;

