import React from "react";
import { Route, Routes, Link ,useNavigate} from "react-router-dom";
import "./StudentNavbar.css";
import Home from "./StudentHome";
import StudentCourse from "./StudentCourse";

import './StudentNavbar.css'
import ViewStudentEnrolledCourses from "./ViewStudentEnrolledCourses";
import CourseView from "./CourseView";

export default function StudentNavBar() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('isAdminLoggedIn');
    localStorage.removeItem('admin');
    navigate('/adminlogin');
    window.location.reload()
  };
  return (
    <div>
      <div className="student_navbar">
        <img style={{ height: "60px", width: "100px" }} src="lms_logo.png" />
        &nbsp; &nbsp; &nbsp; &nbsp;
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/mycourses">My Courses</Link>
          </li>
          <li>
            <Link to="/viewallcourses">All Courses</Link>
          </li>
          <li><button className="logoutButton" onClick={handleLogout}>Logout</button></li>
        </ul>
      </div>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/home" Component={Home} />
        <Route path="/mycourses" Component={ViewStudentEnrolledCourses}/>
        <Route path="/viewallcourses" Component={StudentCourse} />
        <Route path="/course/:courseId" Component={CourseView} />
      </Routes>
    </div>
  );
}

// export default function StudentNavBar() {
//   return (
//     <div>
//       <ul className="navbar">
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <Link to="/mycourses">My Courses</Link>
//         </li>
//         <li>
//           <Link to="/viewallcourses">All Courses</Link>
//         </li>
//       </ul>
//       <Routes>
//         <Route path="/" Component={Home} />
//         <Route path="/home" Component={Home} />
//         <Route path="/viewallcourses" Component={StudentCourse} />
//         <Route path="/allcourses" Component={StudentCourse} />
//       </Routes>
//     </div>
//   );
// }
