import React from "react";
import "./Se.css"; 

function Softwareengineering() {
  return (
    <div className="subject-container se-theme">
      {/* Floating SE Icon */}
      <div className="floating-subject-icon">🏗️</div>

      <div className="subject-card">
        <h1 className="subject-title">SOFTWARE ENGINEERING</h1>
        
        <div className="badge neon-blue">SDLC & DESIGN</div>
        
        <p className="subject-description">
          This syllabus is **easy to understand and learn**. It is 
          essential for students aiming for **System Design** roles 
          and technical interviews. We provide curated Q&A to help you 
          master the Software Development Life Cycle!
        </p>

        <button className="glow-button-se">
          <span>BUILD YOUR SYLLABUS</span>
        </button>
      </div>
    </div>
  );
}

export default Softwareengineering;
