import React from "react";
import "./Os.css"; // We'll create a shared CSS for subjects

function OperatingSystem() {
  return (
    <div className="subject-container os-theme">
      {/* Animated Floating Icon */}
      <div className="floating-subject-icon">💻</div>

      <div className="subject-card">
        <h1 className="subject-title">OPERATING SYSTEM</h1>
        
        <div className="badge neon-blue">EASY TO LEARN</div>
        
        <p className="subject-description">
          This syllabus is very easy to learn and understand. It is highly 
          helpful for students preparing for **exams** and **interviews**. 
          We also provide important Q&A to boost your preparation!
        </p>

        <button className="glow-button">
          <span>OPEN SYLLABUS PDF</span>
        </button>
      </div>
    </div>
  );
}

export default OperatingSystem;
