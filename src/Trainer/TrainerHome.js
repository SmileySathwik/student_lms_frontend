import React, { useEffect, useState } from "react";

export default function TrainerHome() {
  const [facultydata,setFaculty] = useState("");
  useEffect(() => {
    const facultydata_ = localStorage.getItem('faculty');
    if (facultydata_) {
      const faculty_data = JSON.parse(facultydata_);
      console.log(faculty_data)
      setFaculty(faculty_data);
    }
  }, []);
  return (
    <div>
          {
            facultydata && 
            (
              <center><h3>Welcome {facultydata.name}</h3></center>
            )
          }
          <center>
      <h1>Faculty Home</h1>
        <img src="faculty_logo.jpg" />
      </center>

    </div>
  );
}
