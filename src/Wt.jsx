import React from "react";
import "./Wt.css"; // Using your shared CSS file

function WebTechnology() {
  return (
    <div className="subject-container wt-theme">
      {/* Floating Web Icon */}
      <div className="floating-subject-icon">🌐</div>

      <div className="subject-card">
        <h1 className="subject-title">WEB TECHNOLOGY</h1>
        
        <div className="badge neon-purple">FULL STACK 2026</div>
        
        <p className="subject-description">
          This syllabus makes **Modern Web Development** very easy to learn. 
          Perfect for students building **responsive websites** and 
          preparing for frontend interviews. Includes top Q&A on 
          HTML5, CSS3, and JavaScript!
        </p>

        <button className="glow-button-wt">
          <span>VIEW WEB SYLLABUS</span>
        </button>
      </div>
    </div>
  );
}

export default WebTechnology;
