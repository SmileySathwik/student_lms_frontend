import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import  config from '../config'

function StudentCourseDropdown() {
  // States to hold fetched data
  const [students, setStudents] = useState([]);
  const [courses, setCourses] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // Function to fetch data from the backend
  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch student data
        const studentsResponse = await axios.get(
          `${config.url}/api/v1/admin/viewallstudents`
        );
        setStudents(studentsResponse.data);

        // Fetch course data
        const coursesResponse = await axios.get(
          `${config.url}/api/v1/admin/viewallcourses`
        );
        setCourses(coursesResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  // Function to handle selection change
  const handleStudentChange = (event) => {
    setSelectedStudent(event.target.value);
  };

  const handleCourseChange = (event) => {
    setSelectedCourse(event.target.value);
  };

  const handleenrol = async (cid, sid) => {
    // e.preventdefault()
    console.log(sid, cid);
    try {
      const data = await axios.post(
        `${config.url}/api/v1/admin/enrolcourse`,
        { sid, cid }
      );
      if (data != null) {
        toast.success("Enrooled successfully!!");
        setMessage("Successfully Enrolled!!");
        setError("");
      } else {
        toast.error("Error while regestering course!!");
        setMessage("");
        setError("Error", error.message);
      }
    } catch (error) {
      console.log("Error", error.message);
    }
  };

  return (
    <div>
      <br></br>
      <form className="form-container">
        <h2 className="form-title">Select Student and Course</h2>

        <label htmlFor="studentSelect">Select Student:</label>

        <select
          id="studentSelect"
          onChange={handleStudentChange}
          value={selectedStudent}
        >
          <option value="">Select Student</option>
          {students.map((student) => (
            <option key={student.sid} value={student.sid}>
              {student.sid}
            </option>
          ))}
        </select>

        <label htmlFor="courseSelect">Select Course:</label>
        <select
          id="courseSelect"
          onChange={handleCourseChange}
          value={selectedCourse}
        >
          <option value="">Select Course</option>
          {courses.map((course) => (
            <option key={course.coursecode} value={course.coursecode}>
              {course.coursecode}
            </option>
          ))}
        </select>
        <button
          type="submit"
          onClick={(e) => handleenrol(selectedCourse, selectedStudent)}
        >
          Map
        </button>
      </form>
    </div>
  );
}

export default StudentCourseDropdown;
