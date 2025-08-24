import React from "react";
import "../style/home.css";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";

function Home() {
  return (
    <div className="page-container">
      <header className="header">
        <div>{<Navbar />}</div>
        <div></div>
      </header>
      <main className="content"></main>
      <Footer />
    </div>
  );
}

export default Home;
