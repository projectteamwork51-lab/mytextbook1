import { useNavigate } from "react-router-dom";
import "./Css.css"; // We'll create this next

function Css() {
  const navigate = useNavigate();

  const handleSelect = (e) => {
    const value = e.target.value.toLowerCase().trim();

    if (value === "ime") navigate("/Ime");
    if (value === "bd&cc") navigate("/Bdcc");
    if (value === "android programming") navigate("/Android");
    if (value === "iot") navigate("/Iot");
    if (value === "python") navigate("/Python");
  };

  return (
    <div className="semester-page-3rd">
      {/* Floating Logo/Icon for 3rd Year */}
      <div className="year-icon">🎓</div>
      
      <div className="subject-card">
        <h2 className="glow-text">3rd YEAR PORTAL</h2>
        <p className="description">Level Up Your Skills</p>
        
        <div className="input-box">
          <input
            list="sem5"
            placeholder="Search Subject..."
            className="neon-input"
            onChange={handleSelect}
          />
          <datalist id="sem5">
            <option value="IME" />
            <option value="BD&CC" />
            <option value="ANDROID PROGRAMMING" />
            <option value="IOT" />
            <option value="PYTHON" />
          </datalist>
        </div>
      </div>
    </div>
  );
}

export default Css;
