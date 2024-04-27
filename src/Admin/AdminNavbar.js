import React from "react";
import { Route, Routes, Link ,useNavigate } from "react-router-dom";
import AdminHome from "./AdminHome";
import AddCourse from "./AddCourses";
import AddStudent from "./AddStudent";
import AddFaculty from "./AddFaculty";
import ViewFaculty from "./ViewFaculty";
import ViewStudents from "./ViewStudents";
import ViewCourses from "./ViewCourses";
import "./AdminNav.css";
import MapStudentCourse from "./MapStudentCourse";

export default function AdminNavBar() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('isAdminLoggedIn');
    localStorage.removeItem('admin');
    navigate('/adminlogin');
    window.location.reload()
  };
  return (
    <div>
      <div className="admin_navbar">
        <img style={{ height: "60px", width: "100px" }} src="lms_logo.png" />
        &nbsp; &nbsp; &nbsp; &nbsp;
        <ul>
          <li>
            <Link to="/adminhome">Home</Link>
          </li>
          <li>
            <Link to="/addcourse">Add Course</Link>
          </li>

          <li>
            <Link to="/addstudent">Add Student</Link>
          </li>

          <li>
            <Link to="/addfaculty">Add Faculty</Link>
          </li>

          <li>
            <Link to="/viewallfaculty">Faculty Profiles</Link>
          </li>

          <li>
            <Link to="/viewallstudent">Students Profiles</Link>
          </li>

          <li>
            <Link to="/viewallcourse">Courses Data</Link>
          </li>
          <li>
            <Link to="/mapcoursestudent">Map Courses</Link>
          </li>
          <li><button className="logoutButton" onClick={handleLogout}>Logout</button></li>
        </ul>
      </div>
      <Routes>
        <Route path="/" Component={AdminHome} />
        <Route path="/adminhome" Component={AdminHome} />
        <Route path="/addcourse" Component={AddCourse} />
        <Route path="/addstudent" Component={AddStudent} />
        <Route path="/addfaculty" Component={AddFaculty} />
        <Route path="/viewallfaculty" Component={ViewFaculty} />
        <Route path="/viewallstudent" Component={ViewStudents} />
        <Route path="/viewallcourse" Component={ViewCourses} />
        <Route path="/mapcoursestudent" Component={MapStudentCourse}/>
      </Routes>
    </div>
  );
}
