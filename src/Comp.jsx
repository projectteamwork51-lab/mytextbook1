import React from "react";
import "./Comp.css"; 

function Comp() {
  return (
    <div className="subject-container comp-theme">
      {/* Floating Microprocessor Icon */}
      <div className="floating-subject-icon">📟</div>

      <div className="subject-card">
        <h1 className="subject-title">MICROPROCESSOR & CO</h1>
        
        <div className="badge neon-gold-chip">HARDWARE CORE 2026</div>
        
        <p className="subject-description">
          Unlock the secrets of **Computer Architecture**. This syllabus 
          simplifies instruction sets and 8086 microprocessors. 
          Master the **low-level logic** needed for exams and 
          embedded systems interviews with our curated Q&A!
        </p>

        <button className="glow-button-comp">
          <span>INITIALIZE SYLLABUS</span>
        </button>
      </div>
    </div>
  );
}

export default Comp;
