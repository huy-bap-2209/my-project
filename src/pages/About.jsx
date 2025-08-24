import React from "react";
import Navbar from "../components/Navbar";
import "../style/home.css";
import Footer from "../components/footer";

function About() {
  return (
    <div className="page-container">
      <header className="header">
        <div>{<Navbar />}</div>
      </header>
      <main className="content"></main>
      <Footer />
    </div>
  );
}

export default About;
