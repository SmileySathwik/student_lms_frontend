import React, { useState, useEffect } from "react";
import axios from "axios";
import "./card.css";
import { toast } from "react-toastify";
import  config from '../config'

export default function ViewCourses() {
  const [courses, setCourses] = useState([]);
  const [deletecourse_,setdelcourse] = useState();

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    // Fetch courses from the backend when the component mounts
    fetchCourses();
    // ViewCourses();
  }, [deletecourse_]);
  
  const deletecourse = async (coursecode) => {
    try {
      const response = await axios.delete(
        `${config.url}/api/v1/admin/deletecourse/${coursecode}`
      );
      setMessage(response.data);
      setError("");
      toast.success("Course Successfully Deleted!!");
      setdelcourse("deleted!");
    } catch (error) {
      setError(error.message);
      setMessage("");
    }
  };

  const fetchCourses = async () => {
    try {
      const response = await axios.get(
        `${config.url}/api/v1/admin/viewallcourses`
      );
      setCourses(response.data);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  return (
    <div className="card-list">
      <h2>Course List</h2>
      <div className="course-list">
        {courses.map((course) => (
          <div key={course._id} className="course-card">
            <h3>{course.name}</h3>
            <p>Course Code: {course.coursecode}</p>
            <p>Faculty: {course.faculty}</p>
            <p>Description: {course.description}</p>
            <button
              className="button"
              onClick={() => deletecourse(course.coursecode)}
            >
              Delete Course
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
