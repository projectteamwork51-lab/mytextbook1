import React from "react";
import "./Maths.css"; 

function Maths() {
  return (
    <div className="subject-container maths-theme">
      {/* Floating Math Icon */}
      <div className="floating-subject-icon">∞</div>

      <div className="subject-card">
        <h1 className="subject-title">MATHEMATICS</h1>
        
        <div className="badge neon-indigo">ECET & B.TECH READY</div>
        
        <p className="subject-description">
          This syllabus is designed to make problem-solving **simple and fast**. 
          It covers essential topics for your **2nd-year B.Tech** journey 
          and is a powerful resource for **ECET preparation**. 
          Master the logic with our curated Q&A!
        </p>

        <button className="glow-button-maths">
          <span>UNLOCK MATH SYLLABUS</span>
        </button>
      </div>
    </div>
  );
}

export default Maths;
