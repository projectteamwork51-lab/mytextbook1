import { useNavigate } from "react-router-dom";
import "./Html.css";

function Html() {
  const navigate = useNavigate();

  const handleSelect = (e) => {
    const value = e.target.value.toLowerCase();
    if (value === "maths") navigate("/maths");
    if (value === "digital electronics") navigate("/de");
    if (value === "operating system") navigate("/os");
    if (value === "data structures through c") navigate("/dstc");
    if (value === "database management system") navigate("/dbms");
  };

  const handleSelects = (e) => {
    const value = e.target.value.toLowerCase();
    if (value === "software engineering") navigate("/Se");
    if (value === "web technology") navigate("/Wt");
    if (value === "computer organisation & microprocessor") navigate("/Comp");
    if (value === "java through oops") navigate("/Java");
    if (value === "computer network & cyber security") navigate("/Cncs");
  };

  return (
    <div className="page-wrapper">
      <div className="glass-card">
        <h2 className="main-title">C23 ACADEMIC PORTAL</h2>

        <section className="semester-block sem-3">
          <div className="badge">YEAR 2</div>
          <h1 className="sem-header">3rd Semester Subjects</h1>
          <input list="sem3" placeholder="Click to choose subject..." onChange={handleSelect} />
          <datalist id="sem3">
            <option value="MATHS" />
            <option value="DIGITAL ELECTRONICS" />
            <option value="OPERATING SYSTEM" />
            <option value="DATA STRUCTURES THROUGH C" />
            <option value="DATABASE MANAGEMENT SYSTEM" />
          </datalist>
        </section>

        <section className="semester-block sem-4">
          <div className="badge">YEAR 2</div>
          <h1 className="sem-header">4th Semester Subjects</h1>
          <input list="sem4" placeholder="Click to choose subject..." onChange={handleSelects} />
          <datalist id="sem4">
            <option value="SOFTWARE ENGINEERING" />
            <option value="WEB TECHNOLOGY" />
            <option value="COMPUTER ORGANISATION & MICROPROCESSOR" />
            <option value="JAVA THROUGH OOPS" />
            <option value="COMPUTER NETWORK & CYBER SECURITY" />
          </datalist>
        </section>
      </div>
    </div>
  );
}

export default Html;
