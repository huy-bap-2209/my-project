// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";
import "../style/footer.css";
function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-left">
        <h2 className="footer-logo">Shop Ông Huy</h2>
        <p>&copy; 2025 Shop Cứt. All rights reserved.</p>
      </div>

      <div className="footer-links">
        <h3>Khám Phá</h3>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/product">Product</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/support">Support</Link>
      </div>

      <div className="footer-social">
        <h3>Theo dõi chúng tao</h3>
        <div className="social-icons">
          <a href="https://www.facebook.com/huy.ngo.392523">
            <FaFacebook size={20} />
          </a>
          <a href="#">
            <FaInstagram size={20} />
          </a>
          <a href="#">
            <FaTiktok size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
