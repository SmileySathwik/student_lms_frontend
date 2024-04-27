import React from "react";
import "./navbar.css"; // Import the navbar CSS file
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
// import Login from "./Login";
import AdminLogin from "./Loginpages/AdminLogin";
import FacultyLogin from "./Loginpages/FacultyLogin";
import StudentLogin from "./Loginpages/StudentLogin";

export default function NavBar({
  onAdminLogin,
  onFacultyLogin,
  onStudentLogin,
}) {
  return (
    <div>
      <header className="header">
        <div className="companyName">
          <img
            style={{ height: "60px", width: "100px" }}
            src="lms_logo.png"
          ></img>
        </div>
        <div className="navgations">
          <div className="item">
            <Link to="home">Home</Link>
          </div>
          <div className="item">
            <Link to="about">About</Link>
          </div>
          <div className="item">
            <Link to="contact">Contact</Link>
          </div>
          <div class="dropdown">
            <span>Login</span>
            <div class="dropdown-content">
              <p>
                <Link to="/adminlogin">Admin Login</Link>
              </p>
              <p>
                <Link to="/facultylogin">Faculty Login</Link>
              </p>
              <p>
                <Link to="/studentlogin">Student Login</Link>
              </p>
            </div>
          </div>
        </div>
        <div className="actions"></div>
      </header>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/home" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/contact" Component={Contact} />
        <Route path="/adminlogin" element={<AdminLogin onAdminLogin={onAdminLogin}/>} />
        <Route path="/facultylogin" element={<FacultyLogin onFacultyLogin={onFacultyLogin}/>} />
        <Route path="/studentlogin" element={<StudentLogin onStudentLogin={onStudentLogin}/>} />
      </Routes>
    </div>
  );
}
