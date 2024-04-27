import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import  config from '../config'

const ViewStudents = () => {
  const [studentData, setStudentData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${config.url}/api/v1/admin/viewallstudents`); // Replace "/api/students" with your backend route for fetching student data
      setStudentData(response.data);
    } catch (error) {
      console.error("Error fetching student data:", error);
    }
  };

  const deletestudent = async(sid)=>{
    try {
      const response = await axios.delete(`${config.url}/api/v1/admin/deletestudent/${sid}`)
      if(!response.data){
        toast.error("Error Occured While deletion!")
      }
      else{
        toast.success("Successfully deleted");
      }
    } catch (error) {
      
    }
  }

  return (
    <div>
      <h2>Student Table</h2>
      <table className="faculty_table">
        <thead>
          <tr>
            <th>Name</th>
            <th>SID</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Gender</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {studentData.map((student, index) => (
            <tr key={index} style={{ backgroundColor: index % 2 === 0 ? "#f2e2e0" : "#ffffff" }}>
              <td>{student.name}</td>
              <td>{student.sid}</td>
              <td>{student.email}</td>
              <td>{student.phoneNumber}</td>
              <td>{student.gender}</td>
              <td><button className="button" onClick={()=>deletestudent(student.sid)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewStudents;
