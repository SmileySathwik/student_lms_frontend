import React, { useState, useEffect } from "react";
import axios from "axios";
import "./card.css";
import  config from '../config'

export default function StudentCourse() {
  const [courses, setCourses] = useState([]);

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    // Fetch courses from the backend when the component mounts
    fetchCourses();
  }, []);

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
            <p>Credits:{course.credits}</p>
            <button
              class="button"
            >
              View
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
