import React, { useState, useEffect } from "react";
import "./ViewCounter.css";

const ViewCounter = () => {
  const [viewCount, setViewCount] = useState(0);

  useEffect(() => {
    // Reset counter to 0
    localStorage.setItem("websiteViewCount", "0");
    setViewCount(0);
    
    // Skip counting if on localhost (development) or if marked as developer
    const isLocalhost = window.location.hostname === 'localhost' || 
                       window.location.hostname === '127.0.0.1' ||
                       window.location.hostname === '';
    const isDeveloper = localStorage.getItem("viewCounterDeveloper") === "true";
    
    if (isLocalhost || isDeveloper) {
      return;
    }
    
    // Note: Counter is reset to 0. Remove the reset lines above if you want normal counting to resume.
    // On the next visit (after removing reset), it will start counting from 1.
  }, []);

  return (
    <div className="view-counter">
      <span className="view-counter-text">{viewCount.toLocaleString()}</span>
    </div>
  );
};

export default ViewCounter;
