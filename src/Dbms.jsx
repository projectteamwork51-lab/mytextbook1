import React from "react";
import "./Dbms.css"; 

function Database() {
  return (
    <div className="subject-container dbms-theme">
      {/* Floating Database Icon */}
      <div className="floating-subject-icon">🗄️</div>

      <div className="subject-card">
        <h1 className="subject-title">DATABASE MANAGEMENT</h1>
        
        <div className="badge neon-silver">SQL & STORAGE 2026</div>
        
        <p className="subject-description">
          Master the art of **Data Organization** and Retrieval. This syllabus 
          simplifies complex **Normalization** and SQL queries. Perfect for 
          acing your backend interviews and exams with our 
          specially curated important Q&A!
        </p>

        <button className="glow-button-dbms">
          <span>QUERY SYLLABUS</span>
        </button>
      </div>
    </div>
  );
}

export default Database;
