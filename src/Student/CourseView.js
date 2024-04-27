// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// function CourseView() {
//   const [assignments, setAssignments] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const { courseId } = useParams();

//   useEffect(() => {
//     const fetchAssignments = async () => {
//       try {
//         console.log(courseId);
//         const response = await axios.get(
//           `${config.url}/api/v1/student/assignments/${courseId}`
//         );
//         setAssignments(response.data.assignments);
//         setLoading(false);
//       } catch (error) {
//         setLoading(false);
//         console.error("Error fetching assignments:", error);
//       }
//     };

//     fetchAssignments();
//   }, [courseId]);

//   const student_data = JSON.parse(localStorage.getItem("student"));
//   useEffect(() => {
//     console.log(courseId, student_data.sid);
//   }, []);

//   return (
//     <div>
//       <h1>Assignments for Course {courseId}</h1>
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <div className="grid grid-cols-3 gap-4">
//           {assignments.map((assignment) => (
//             <li key={assignment._id}>
//               <h3>{assignment.name}</h3>
//               <p>{assignment.description}</p>
//               <p>Uploaded by: {assignment.uploadedBy}</p>

//               <a
//                 target="_blank"
//                 rel="noreferrer"
//                 href={`${config.url}/api/v1/student/eventpdf/${assignment.filename}`}
//               >
//                 <button className="border-2 px-2 py-1 rounded text-[20px] text-white bg-gray-700">
//                   Open
//                 </button>

//                 <button className="border-2 px-2 py-1 rounded text-[20px] text-white bg-gray-700">
//                   Upload
//                 </button>

//               </a>
//               {/* Add more details here if needed */}
//             </li>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default CourseView;

import React, { useEffect, useRef, useState } from "react";
import { useParams , useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from 'react-toastify';
import  config from '../config'

function CourseView() {
  // const fileInputRef = useRef(null);

  // // Aissignment upload
  // const [course,setCourse] = useState("");
  // const [uploadsubmissionid, setuploadsubmissionid] = useState("");
  // const [uploadstudentid, setstudentid] = useState("");
  // const [uploadFile, setUploadFile] = useState(null);

  // async function handleUploadAssignment(e) {
  //   e.preventDefault();
  //   try {
  //     const studentData = JSON.parse(localStorage.getItem("student"));
  //     const studentID = studentData.sid;

  //     const data = {
  //       filename: uploadFile,
  //       submissionId: new Date().toISOString() + "-" + studentID,
  //       uploadedBy: studentID,
  //       assignmentId : Math.random(5000)*100,
  //       course: course,
  //     };

  //     const formData = new FormData();
  //     formData.append("id", data.submissionId);
  //     formData.append("uploadedBy", data.uploadedBy);
  //     formData.append("assignmentId",data.assignmentId);
  //     formData.append("course", data.course);
  //     formData.append("file", data.file);

  //     const response = await axios.post(
  //       `${config.url}/api/v1/student/assignment/upload?file=${data.submissionId}`,
  //       formData,
  //       {
  //         headers: {
  //           "Content-Type": "multipart/form-data",
  //         }
  //       }
  //     );
  //     console.log(response.data);
  //   } catch (err) {
  //     alert("Failed to upload");
  //   }
  // }

  // useEffect(() => {
  //   fetchCourses();
  //   const facultydata_ = localStorage.getItem("student");
  //   if (facultydata_) {
  //     const faculty_data = JSON.parse(facultydata_);
  //     console.log(faculty_data);
  //     setstudentid(faculty_data);
  //   }
  // }, []);
  // const fetchCourses = async () => {
  //   try {
  //     const ls = localStorage.getItem("faculty");
  //     const faculty_data = JSON.parse(ls);
  //     const { course } = faculty_data;
  //     console.log("hello", course);
  //     const response = await axios.post(
  //       `${config.url}/api/v1/student/mycourse/:${course}`
  //     );
  //     setCourses(response.data);
  //   } catch (error) {
  //     console.error(error.message);
  //   }
  // };

  const [assignments, setAssignments] = useState([]);
  const [loading, setLoading] = useState(true);

  const { courseId } = useParams();
  const navigate = useNavigate(); 
  const handleupload = ()=>{
    toast.success("Successfully uploaded Assignment");
    navigate('/course')
    window.location.reload();

  }

  useEffect(() => {
    const fetchAssignments = async () => {
      try {
        const response = await axios.get(
          `${config.url}/api/v1/student/assignments/${courseId}`
        );
        setAssignments(response.data.assignments);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error("Error fetching assignments:", error);
      }
    };

    fetchAssignments();
  }, [courseId]);

  const student_data = JSON.parse(localStorage.getItem("student"));
  useEffect(() => {
    console.log(courseId, student_data.sid);
  }, []);

  return (
    <div>
      <div>
        <h1>Assignments for Course {courseId}</h1>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {assignments.map((assignment) => (
            <div
              key={assignment._id}
              className="bg-white p-4 rounded-md shadow-md"
            >
              <h3 className="text-xl font-semibold">{assignment.name}</h3>
              <p className="text-gray-600">{assignment.description}</p>
              <p className="text-gray-700">
                Uploaded by: {assignment.uploadedBy}
              </p>
              <div className="flex justify-between mt-3">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={`${config.url}/api/v1/student/eventpdf/${assignment.filename}`}
                >
                  <button className="border-2 px-2 py-1 rounded text-[20px] text-white bg-gray-700">
                    Open
                  </button>
                </a>
                <input
                required
                type="file"
              />
                  <button className="border-2 px-2 py-1 rounded text-[20px] text-white bg-gray-700" onClick={(e)=>{handleupload()}}>
                    Upload
                  </button>

                  
              
              
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CourseView;
