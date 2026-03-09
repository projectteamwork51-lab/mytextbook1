import React from "react";
import "./Python.css"; // Uses the same base CSS file

function Python() {
  return (
    <div className="subject-container python-theme">
      {/* Floating Python Icon */}
      <div className="floating-subject-icon">🐍</div>

      <div className="subject-card">
        <h1 className="subject-title">PYTHON PROGRAMMING</h1>
        
        <div className="badge neon-green">MOST POPULAR 2026</div>
        
        <p className="subject-description">
          This syllabus is **exceptionally easy** to learn. Perfect for 
          students diving into Data Science or Web Dev. It covers 
          essential **interview Q&A** and exam-focused topics 
          to ensure your success!
        </p>

        <button className="glow-button-python">
          <span>OPEN PYTHON SYLLABUS</span>
        </button>
      </div>
    </div>
  );
}

export default Python;
