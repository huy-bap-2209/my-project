import React from "react";
import Navbar from "../components/Navbar";
import "../style/home.css";
import Footer from "../components/footer";

function Support() {
  return (
    <div className="page-container">
      <header className="header">
        <div>{<Navbar />}</div>
      </header>

      <main className="content">
        <form class="contact-form">
          <label for="name">Họ và tên:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Nhập tên của bạn"
            required
          />

          <label for="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Nhập email của bạn"
            required
          />
          <label for="message">Tin nhắn:</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Nhập ý kiến của bạn"
            required
          ></textarea>

          <button type="submit">Phản Hồi</button>
        </form>
      </main>
      <Footer />
    </div>
  );
}

export default Support;
