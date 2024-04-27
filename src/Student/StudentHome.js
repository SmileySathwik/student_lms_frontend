import React, { useEffect, useState } from "react";

export default function StudentHome() {
  const [studentdata,setStudent] = useState("");
  useEffect(() => {
    const studentdata_ = localStorage.getItem('student');
    if (studentdata_) {
      const student_data = JSON.parse(studentdata_);
      console.log(student_data)
      setStudent(student_data);
    }
  }, []);
  return (
    <div>
      <center>Welcome {studentdata.sid}</center>
      <center>
      <h1>Student Home</h1>
        <img src="student-logo.jpg" />
      </center>
    </div>
  );
}
