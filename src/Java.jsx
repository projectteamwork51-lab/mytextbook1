import React from "react";
import "./Java.css"; // Using your shared CSS file

function Java() {
  return (
    <div className="subject-container java-theme">
      {/* Floating Java Icon */}
      <div className="floating-subject-icon">🧩</div>

      <div className="subject-card">
        <h1 className="subject-title">JAVA THROUGH OOPS</h1>
        
        <div className="badge neon-red">OBJECT ORIENTED</div>
        
        <p className="subject-description">
          This syllabus makes **OOPS concepts** very easy to understand. 
          Perfect for students targeting top-tier **interviews** and exams. 
          Includes expert Q&A to help you master classes, inheritance, 
          and polymorphism!
        </p>

        <button className="glow-button-java">
          <span>OPEN JAVA SYLLABUS</span>
        </button>
      </div>
    </div>
  );
}

export default Java;
