import React from "react";
import "./Main.css";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <div className="homepage">
      <TypeAnimation
        sequence={["Student Learning Management System", 1000, " "]}
        wrapper="span"
        speed={10}
        // style={{
        //   fontFamily: "Honk", system-ui;
        //   font-optical-sizing: auto;
        //   font-weight: 400;
        //   font-style: normal;
        //   font-variation-settings:
        //     "MORF" 15,
        //     "SHLN" 50;

        // fontSize: "3em",
        // display: "inline-block",
        // fontFamily: "Arial, sans-serif", // Set font family
        // fontWeight: "bold", // Set font weight
        // textShadow: "2px 2px 4px rgba(1, 1, 1, 1.5)", // Add text shadow
        // color: "rgba(50, 100, 100, 100)", // Initial color
        // transition: "color 1s ease-in-out", // Smooth color transition
        // }}
        className="heading"
        repeat={Infinity}
      />
      {/* <h1 className="main-heading">Student Learning Management System</h1> */}
      <p className="description" style={{"color":"#000"}}>
        A Learning Management System (LMS) is a software application designed to
        facilitate the management, delivery, and tracking of educational content
        and training programs. It provides educators and learners with a
        centralized platform for creating, organizing, distributing, and
        accessing learning materials, assessments, and communication tools,
        enhancing the efficiency and effectiveness of online learning
        experiences.
      </p>
      <center><img src="lms_logo.png" alt="Student Studying" className="moving-image" /></center>
    </div>
  );
}
