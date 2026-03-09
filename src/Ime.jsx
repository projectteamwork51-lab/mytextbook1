import React from "react";
import "./Ime.css"; 

function Ime() {
  return (
    <div className="subject-container ime-theme">
      {/* Floating Business Icon */}
      <div className="floating-subject-icon">💼</div>

      <div className="subject-card">
        <h1 className="subject-title">INDUSTRIAL MANAGEMENT</h1>
        
        <div className="badge neon-gold">ENTREPRENEURSHIP 2026</div>
        
        <p className="subject-description">
          Master the art of **Leadership** and **Management**. This syllabus is 
          designed for future entrepreneurs to ace their exams and 
          industry interviews. Includes high-value Q&A on 
          industrial growth and startup success!
        </p>

        <button className="glow-button-ime">
          <span>ACCESS IME SYLLABUS</span>
        </button>
      </div>
    </div>
  );
}

export default Ime;
