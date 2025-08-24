import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaBoxOpen,
  FaHome,
  FaInfoCircle,
  FaPhone,
  FaPaperPlane,
} from "react-icons/fa";
import "../style/navbar.css";

function Navbar() {
  const location = useLocation();

  //tạo map để đổi logo với tiêu đề theo route
  const pageConfig = {
    "/home": {
      icon: <FaHome size={30} color="#007bff" />,
      title: "Trang Chủ",
    },
    "/about": {
      icon: <FaInfoCircle size={30} color="#007bff" />,
      title: "Về Chúng Tôi",
    },
    "/product": {
      icon: <FaBoxOpen size={30} color="#007bff" />,
      title: "Sản Phẩm",
    },
    "/support": {
      icon: <FaPaperPlane size={30} color="#007bff" />,
      title: "Hỗ Trợ",
    },

    "/contact": {
      icon: <FaPhone size={30} color="#007bff" />,
      title: "Liên Hệ",
    },
    "/login": { title: "Login" },
    "/register": { title: "register" },
  };
  // nếu k match thì auto hiển thị trang chủ
  const { icon, title } = pageConfig[location.pathname] || pageConfig["/home"];
  return (
    <header className="navbar-container">
      <nav className="nav-links-left">
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </nav>
      <div className="logo-title">
        {icon}
        <h2 className="logo-text">{title}</h2>
      </div>
      <nav className="nav-links-right">
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/product">Product</Link>
        <Link to="/support">Support</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Navbar;
