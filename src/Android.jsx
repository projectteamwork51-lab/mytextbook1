import React from "react";
import "./Android.css"; 

function Android() {
  return (
    <div className="subject-container android-theme">
      {/* Floating Android Icon */}
      <div className="floating-subject-icon">🤖</div>

      <div className="subject-card">
        <h1 className="subject-title">ANDROID PROGRAMMING</h1>
        
        <div className="badge neon-android-green">MOBILE DEV 2026</div>
        
        <p className="subject-description">
          Master the art of **App Development**. This syllabus simplifies 
          complex Android architectures and UI components. Perfect for 
          acing your **technical interviews** and exams with our 
          specially curated important Q&A!
        </p>

        <button className="glow-button-android">
          <span>LAUNCH SYLLABUS</span>
        </button>
      </div>
    </div>
  );
}

export default Android;
