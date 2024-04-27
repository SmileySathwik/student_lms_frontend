import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import  config from '../config'

export default function AddCourses() {
  const [formData, setFormData] = useState({
    name: "",
    coursecode: "",
    credits: "", // Changed to string type initially
    description: "",
    category: "",
  });

  //message state variable
  const [message, setMessage] = useState("");
  //error state variable
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const value =
      e.target.type === "number" ? e.target.value.toString() : e.target.value;
    setFormData({ ...formData, [e.target.id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${config.url}/api/v1/admin/addcourse`,
        formData
      );
      console.log(response.data);
      if (response.status === 201) { // Check for status code 201 for successful creation
        setFormData({
          name: "",
          coursecode: "",
          credits: "",
          description: "",
          category: "",
        });
        toast.success("Course Added Successfully!!");
      }
      setMessage(response.data); // This could be the source of the error
      setError("");
    } catch (error) {
      setError("Error:", error.response ? error.response.data : error.message); // Update how error is set
      setMessage("");
      
    }
  };

  return (
    <div>
      <h3 align="center">
        <u>Add Course</u>
      </h3>
      {message && typeof message === "string" ? (
        <h4 align="center">{message}</h4>
      ) : (
        <h4 align="center">{error}</h4>
      )}
      <br />
      <br />
      {/* {toast.success("Course Added Successfully!!")} */}
      <form className="form-container" onSubmit={handleSubmit}>
        <div>
          <label>Course Name</label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Course Code</label>
          <input
            type="text"
            id="coursecode"
            value={formData.coursecode}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Course Description</label>
          <input
            type="text"
            id="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Course Category</label>
          <select
            id="category"
            type="text"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="">Select Category</option>
            <option value="tech">Technical</option>
            <option value="Nontech">Non - Technical</option>
            <option value="arts">Arts and Design</option>
            <option value="bba">BBA</option>
            <option value="sports">Sports</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label>Credits</label>
          <input
            type="number"
            id="credits" // Corrected ID to match state key
            value={formData.credits}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
