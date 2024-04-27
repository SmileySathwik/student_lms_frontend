import React from "react";
import { Route, Routes, Link,useNavigate } from "react-router-dom";
import "./TrainerNavbar.css";
import TrainerHome from "./TrainerHome";
// import AddCourses from "./AddCourses";
import ExistingCourses from "./ExistingCourses";

export default function TrainerNavBar() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('isAdminLoggedIn');
    localStorage.removeItem('admin');
    navigate('/adminlogin');
    window.location.reload()
  };
  return (
    <div>
      <ul className="faculty_navbar">
        <img style={{ height: "60px", width: "100px" }} src="lms_logo.png" />
        &nbsp; &nbsp;
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/courses">Upload Assignment</Link>
        </li>
        <li><button className="logoutButton" onClick={handleLogout}>Logout</button></li>
      </ul>
      <Routes>
        <Route path="/" Component={TrainerHome} />
        <Route path="/home" Component={TrainerHome} />
        <Route path="/courses" Component={ExistingCourses} />
        {/* <Route path="/addcourse" Component={AddCourses} /> */}
      </Routes>
    </div>
  );
}
