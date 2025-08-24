import React from "react";
import "../style/home.css";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div>
      <header className="header">
        <div>{<Navbar />}</div>
        <div></div>
      </header>
    </div>
  );
}

export default Home;
