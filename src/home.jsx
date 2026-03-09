import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";

function Home() {
  const navigate = useNavigate();

  const handleSelect = (e) => {
    const value = e.target.value.toLowerCase();
    if (value === "2ndyear") navigate("/html");
    if (value === "3rdyear") navigate("/css");
  };

  return (
    <div className="container">
      {/* Dynamic colorful blobs in the background */}
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>

      <div className="syllabus-card">
        <div className="card-inner">
          {/* Animated Floating Icon */}
          <div className="floating-icon">
            <span>🚀</span>
          </div>
          <h3 className="title-gradient">C23 SYLLABUS PORTAL</h3>
          <p className="subtitle">SELECT YOUR ACADEMIC YEAR</p>

          <div className="input-group">
            <input
              list="courses"
              className="syllabus-input"
              placeholder="CHOOSE YOUR YEAR:"
              onChange={handleSelect}
            />
            <datalist id="courses">
              <option value="2ndyear" />
              <option value="3rdyear" />
            </datalist>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
