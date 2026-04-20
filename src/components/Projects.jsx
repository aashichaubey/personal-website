import React from 'react';
import './Projects.css';

function Projects() {
    return (
        <div className="projects">
            <h3 className="section-title fade-in" style={{ animationDelay: '700ms' }}>what i've built</h3>
            <ul className="projects-list">
                <li className="fade-in" style={{ animationDelay: '850ms' }}><span className="project-icon">&#x21B3;</span> brain v2 <span className="project-description"> - memory bank for ai agents (1st overall, shopify) 1450</span></li>
                <li className="fade-in" style={{ animationDelay: '950ms' }}><span className="project-icon">&#x21B3;</span> <a href="https://devpost.com/software/insert-name-7aivn4" className="project-link">nexplaybook</a> <span className="project-description"> - polymarket chrome extension</span></li>
                <li className="fade-in" style={{ animationDelay: '1050ms' }}><span className="project-icon">&#x21B3;</span> <a href="https://devpost.com/software/wingman-ai-mvegrk" className="project-link">wingman </a> <span className="project-description"> - ai wingman for chats</span></li>
                <li className="fade-in" style={{ animationDelay: '1150ms' }}><span className="project-icon">&#x21B3;</span> <a href="https://devpost.com/software/secret-project-m6s25w" className="project-link">dermacare </a> <span className="project-description"> - scans barcodes of skincare to identify harmful ingredients</span></li>
                <li className="fade-in" style={{ animationDelay: '1250ms' }}><span className="project-icon">&#x21B3;</span> end to end vehicle investigator <span className="project-description"> - (3rd overall, motorola)</span></li>
                <li className="fade-in" style={{ animationDelay: '1350ms' }}><span className="project-icon">&#x21B3;</span> <a href="https://devpost.com/software/spine-guard" className="project-link">spine guard </a> <span className="project-description"> - wearable posture tracker (best healthtech hack) 600+</span></li>
                <li className="fade-in" style={{ animationDelay: '1450ms' }}><span className="project-icon">&#x21B3;</span> <a href="https://github.com/emily27yee/WiE-hackathon" className="project-link">platecheck</a> <span className="project-description"> - women's nutrient tracker app (1st overall)</span></li>
            </ul>
        </div>
    );
}

export default Projects;
