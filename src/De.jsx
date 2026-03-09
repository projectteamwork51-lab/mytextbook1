import React from "react";
import "./De.css"; 

function Digitalelectronics() {
  return (
    <div className="subject-container de-theme">
      {/* Floating Logic Icon */}
      <div className="floating-subject-icon">⚡</div>

      <div className="subject-card">
        <h1 className="subject-title">DIGITAL ELECTRONICS</h1>
        
        <div className="badge neon-cyan">BINARY LOGIC 2026</div>
        
        <p className="subject-description">
          Master the world of **Logic Gates** and Flip-Flops. This syllabus 
          is designed to make **Number Systems** and Sequential Circuits 
          incredibly easy to understand. Perfect for core engineering 
          exams and hardware-focused interviews!
        </p>

        <button className="glow-button-de">
          <span>PULSE SYLLABUS</span>
        </button>
      </div>
    </div>
  );
}

export default Digitalelectronics;
