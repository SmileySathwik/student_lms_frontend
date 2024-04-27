import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Student.css";
import './card.css'
import { useNavigate } from "react-router-dom";
import  config from '../config'

export default function ViewStudentEnrolledCourses() {
  const [courses, setMyCourses] = useState([]);

  const navigator = useNavigate()

  const fetchMyCourses = async () => {
    try {
      const studentdata = JSON.parse(localStorage.getItem("student"));
      console.log(studentdata);
      const response = await axios.get(
        `${config.url}/api/v1/student/getenrolledcourses`,
        {params:studentdata}
      );
      setMyCourses(response.data.courses);
      console.log(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  const handlestart = async(cid) =>{
    navigator(`/course/${cid}`);
  }

  useEffect(() => {
    fetchMyCourses();
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Enrolled Courses</h1>

      <div className="course-list">
        {courses.map((course) => (
          <div key={course._id} className="course-card">
            <h3>{course.name}</h3>
            <p>Course Code: {course.coursecode}</p>
            <p>Faculty: {course.faculty}</p>
            <p>Description: {course.description}</p>
            <button
              class="button"
              onClick={() => handlestart(course.coursecode)}
            >
              Get Started
            </button>
          </div>
        ))}
      </div>

      {/* <table className="student_table">
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Faculty</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(mycourses) && mycourses.length > 0 ? (
            mycourses.map((mycourses, index) => (
              <tr
                key={index}
                style={{
                  backgroundColor: index % 2 === 0 ? "#f2e2e0" : "#ffffff",
                }}
              >
                <td>{mycourses.name}</td>
                <td>{mycourses.faculty}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="2" style={{ backgroundColor: "#f2e2e0" }}>
                No Data Found
              </td>
            </tr>
          )}
        </tbody>
      </table> */}
    </div>
  );
}
