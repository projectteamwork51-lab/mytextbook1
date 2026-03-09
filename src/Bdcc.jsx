import React from "react";
import "./Bdcc.css"; 

function Bdcc() {
  return (
    <div className="subject-container bdcc-theme">
      {/* Floating Cloud/Data Icon */}
      <div className="floating-subject-icon">☁️</div>

      <div className="subject-card">
        <h1 className="subject-title">BIG DATA & CLOUD</h1>
        
        <div className="badge neon-silver">SCALABLE TECH 2026</div>
        
        <p className="subject-description">
          Dive into the world of **distributed systems** and data analytics. 
          This syllabus simplifies complex **Cloud Architectures** for students. 
          Perfect for exam prep and high-level **interviews** with curated 
          important Q&A!
        </p>

        <button className="glow-button-bdcc">
          <span>ACCESS CLOUD SYLLABUS</span>
        </button>
      </div>
    </div>
  );
}

export default Bdcc;
