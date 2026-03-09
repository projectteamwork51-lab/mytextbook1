import React from "react";
import "./Iot.css"; 

function Iot() {
  return (
    <div className="subject-container iot-theme">
      {/* Floating IoT Icon */}
      <div className="floating-subject-icon">📡</div>

      <div className="subject-card">
        <h1 className="subject-title">INTERNET OF THINGS</h1>
        
        <div className="badge neon-orange">SMART TECH 2026</div>
        
        <p className="subject-description">
          Explore the world of **Connected Devices** and Sensors. This syllabus 
          is crafted to make complex hardware-software integration easy to 
          understand. Get access to important **IoT Q&A** for your 
          upcoming exams and technical interviews!
        </p>

        <button className="glow-button-iot">
          <span>CONNECT TO SYLLABUS</span>
        </button>
      </div>
    </div>
  );
}

export default Iot;
