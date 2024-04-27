import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AdminNav.css";
import { toast } from "react-toastify";
import  config from '../config'
const ViewFaculty = () => {
  const [facultyData, setFacultyData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const deletefaculty = async(fid)=>{
    try {
      const response = await axios.delete(`${config.url}/api/v1/admin/deletefaculty/${fid}`);
      toast.success("Faculty Successfully Deleted!!")
    } catch (error) {
      console.log(error.message)
    }
  }
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${config.url}/api/v1/admin/viewallfaculty`
      ); // Replace "/api/faculty" with your backend route for fetching faculty data
      setFacultyData(response.data);
    } catch (error) {
      console.error("Error fetching faculty data:", error);
    }
  };

  return (
    <div>
      <h2>Faculty Table</h2>
      <table className="faculty_table">
        <thead style={{ backgroundColor: "#4caf50" }}>
          <tr>
            <th>Name</th>
            <th>FID</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Gender</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {facultyData.map((faculty, index) => (
            <tr
              key={index}
              style={{
                backgroundColor: index % 2 === 0 ? "#f2e2e0" : "#ffffff",
              }}
            >
              <td>{faculty.name}</td>
              <td>{faculty.fid}</td>
              <td>{faculty.email}</td>
              <td>{faculty.phoneNumber}</td>
              <td>{faculty.gender}</td>
              <td><button className="button" onClick={()=>deletefaculty(faculty.fid)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewFaculty;

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function ViewFaculty() {
//   const [faculty, setFaculty] = useState([]);
//   const fetchFaculty = async () => {
//     try {
//       const response = await axios.get(
//         "${config.url}/api/v1/admin/viewallfaculty"
//       );
//       setFaculty(response.data);
//     } catch (error) {
//       console.error("Error fetching faculty:", error);
//     }
//   };

//   useEffect(() => {
//     fetchFaculty();
//   }, []);

//   return (
//     <div>
//       <h1>Facult List</h1>
//       <ul>
//         {faculty.map((facultyMember) => (
//           <li key={facultyMember._id}>
//             <p>Name: {facultyMember.name}</p>
//             <p>Email: {facultyMember.email}</p>
//             <p>Phone Number: {facultyMember.phoneNumber}</p>
//             <p>Gender: {facultyMember.gender}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default ViewFaculty;
