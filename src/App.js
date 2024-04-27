//import logo from './logo.svg';
import './index.css';
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./Main/NavBar";
import StudentNavBar from "./Student/StudentNavBar";
import TrainerNavBar from "./Trainer/TrainerNavbar";
import AdminNavBar from "./Admin/AdminNavbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

function App() {
  const [isAdmin, setAdmin] = useState(false);
  const [isFaculty, setFaculty] = useState(false);
  const [isStudent, setStudent] = useState(false);

  // useEffect(() => {
  //   const adminLoggedIn = localStorage.getItem('isAdminLoggedIn') === 'true';
  //   const jobSeekerLoggedIn = localStorage.getItem('isJobSeekerLoggedIn') === 'true';
  //   const recruiterLoggedIn = localStorage.getItem('isRecruiterLoggedIn') === 'true';

  //   setIsAdminLoggedIn(adminLoggedIn);
  //   setIsJobSeekerLoggedIn(jobSeekerLoggedIn);
  //   setIsRecruiterLoggedIn(recruiterLoggedIn);
  // }, []);

  const onAdminLogin = () => {
    localStorage.setItem("isAdmin", "true");
    setAdmin(true);
  };

  const onFacultyLogin = () => {
    localStorage.setItem("isFaculty", "true");
    setFaculty(true);
  };

  const onStudentLogin = () => {
    localStorage.setItem("isStudent", "true");
    setStudent(true);
  };

  return (
    <div>
      <center>
        <h1>Student Learning Management System</h1>
      </center>
      <br></br>

      <Router>
        {isAdmin ? (
          <AdminNavBar />
        ) : isFaculty ? (
          <TrainerNavBar />
        ) : isStudent ? (
          <StudentNavBar />
        ) : (
          <NavBar
            onAdminLogin={onAdminLogin}
            onFacultyLogin={onFacultyLogin}
            onStudentLogin={onStudentLogin}
          />
        )}
      </Router>

      <ToastContainer />
    </div>
  );
}

export default App;
