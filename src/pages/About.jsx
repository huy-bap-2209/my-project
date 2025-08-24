import React from "react";
import Navbar from "../components/Navbar";
import "../style/home.css";

function About() {
  return (
    <div>
      <header className="header">
        <div>{<Navbar />}</div>
      </header>
    </div>
  );
}

export default About;
