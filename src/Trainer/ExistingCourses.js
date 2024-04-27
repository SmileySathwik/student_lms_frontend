import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./Trainer.css";
import  config from '../config'

export default function ExistingCourses() 
{
  const [courses, setCourses] = useState([]);
  const [facultydata, setFaculty] = useState("");

  const fileInputRef = useRef(null);

  // Aissignment upload
  const [uploadTitle, setUploadTitle] = useState("");
  const [uploadDescription, setUploadDescription] = useState("");
  const [uploadFile, setUploadFile] = useState(null);

  async function handleUploadAssignment(e) {
    e.preventDefault();
    try {
      const facultyData = JSON.parse(localStorage.getItem("faculty"));
      const courseCode = facultyData.course;
      const facultyID = facultyData.fid;

      const data = {
        title: uploadTitle,
        description: uploadDescription,
        file: uploadFile,
        id: new Date().toISOString() + "-" + courseCode + "-" + facultyID,
        uploadedBy: facultyID,
        course: courseCode,
      };

      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("description", data.description);
      formData.append("id", data.id);
      formData.append("uploadedBy", data.uploadedBy);
      formData.append("course", data.course);
      formData.append("file", data.file);


      const response = await axios.post(
        `${config.url}/api/v1/faculty/assignment/upload?file=${data.id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          }
        }
      );
      console.log(response.data);
    } catch (err) {
      alert("Failed to upload");
    }
  }

  useEffect(() => {
    fetchCourses();
    const facultydata_ = localStorage.getItem("faculty");
    if (facultydata_) {
      const faculty_data = JSON.parse(facultydata_);
      console.log(faculty_data);
      setFaculty(faculty_data);
    }
  }, []);
  const fetchCourses = async () => {
    try {
      const ls = localStorage.getItem("faculty");
      const faculty_data = JSON.parse(ls);
      const { course } = faculty_data;
      console.log("hello", course);
      const response = await axios.post(
        `${config.url}/api/v1/faculty/mycourse/:${course}`
      );
      setCourses(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <div>
        {/* <h1>Existing Courses</h1> */}
        <h3>Course Code is {facultydata.course}</h3>
      </div>
      <div className="flex flex-col gap-y-2">
        <div className="upload-assignment flex flex-col gap-y-2 px-2">
          <span className="text-2xl font-semibold text-start">
            Upload Assignment
          </span>
          <form
            onSubmit={(e) => handleUploadAssignment(e)}
            className="flex w-full flex-col gap-y-1 justify-start"
          >
            <div className="flex w-full">
              <input
                required
                type="text"
                value={uploadTitle}
                onChange={(e) => setUploadTitle(e.target.value)}
                placeholder="Assignment Title"
                className="w-full rounded-xl border border-gray-600 placeholder:text-gray-600 tracking-wide focus:outline-none focus:border-gray-800"
              />
            </div>
            <div className="flex w-full">
              <textarea
                type="text"
                value={uploadDescription}
                onChange={(e) => setUploadDescription(e.target.value)}
                placeholder="Assignment Description"
                className="w-full rounded-xl border border-gray-600 placeholder:text-gray-600 tracking-wide focus:outline-none focus:border-gray-800"
              />
            </div>
            <div className="flex w-full justify-center">
              <input
                required
                ref={fileInputRef}
                onChange={(e) => setUploadFile(e.target.files[0])}
                type="file"
              />
            </div>
            <div className="flex w-full justify-center relative mt-4">
              <button className="text-[20px] px-3 py-2 rounded-md tracking-wide bg-[#9dbc98] text-white font-semibold transition-colors hover:bg-[#93af8e]">
                Uplaod Assignment
              </button>
            </div>
          </form>
        </div>
        <div></div>
      </div>
    </div>
  );
}
