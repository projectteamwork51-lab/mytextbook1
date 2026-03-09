import React from "react";
import "./Dstc.css"; 

function Data() {
  return (
    <div className="subject-container data-theme">
      {/* Floating DS Icon */}
      <div className="floating-subject-icon">🔗</div>

      <div className="subject-card">
        <h1 className="subject-title">DATA STRUCTURES</h1>
        
        <div className="badge neon-emerald">LOGIC & NODES 2026</div>
        
        <p className="subject-description">
          Build a strong foundation in **Algorithm Logic**. This syllabus 
          simplifies complex Stacks, Queues, and Trees using **C Programming**. 
          Perfect for technical interviews and acing your 2nd-year exams 
          with our curated important Q&A!
        </p>

        <button className="glow-button-data">
          <span>TRAVERSE SYLLABUS</span>
        </button>
      </div>
    </div>
  );
}

export default Data;
