import React from "react";
import "./Cncs.css"; 

function Cncs() {
  return (
    <div className="subject-container cncs-theme">
      {/* Floating Security Icon */}
      <div className="floating-subject-icon">🛡️</div>

      <div className="subject-card">
        <h1 className="subject-title">NETWORK & CYBER SECURITY</h1>
        
        <div className="badge neon-red-security">ENCRYPTED 2026</div>
        
        <p className="subject-description">
          Master the fundamentals of **Network Protocols** and Data Defense. 
          This syllabus simplifies complex **Cyber Security** concepts for 
          students. Access top-tier **Interview Q&A** and exam topics to 
          ensure your digital foundation is unhackable!
        </p>

        <button className="glow-button-cncs">
          <span>SECURE ACCESS</span>
        </button>
      </div>
    </div>
  );
}

export default Cncs;
