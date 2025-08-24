import React from "react";
{
  /* link(L) điều hướng trang  */
}
import { Link, useNavigate } from "react-router-dom";
import "../style/Login.css";
{
  /* kho icon thư viện react */
}
import { FaUserPlus } from "react-icons/fa";

function Register() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefaulf();
    //giả sử đăng ký thành công
    localStorage.setItem("isLoggedIn", "true");

    //chuyển hướng tới home
    navigate("/home");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* icon register */}
        <div className="register-icon">
          <FaUserPlus size={50} color="#007bff" />
        </div>

        {/* tiêu đề*/}
        <h2>Register</h2>

        {/* ô input */}
        <input type="text" placeholder="User Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <input
          type="Password"
          placeholder="Double-check Your Password"
          required
        />

        {/* ô chấp nhận điều khảon */}
        <div className="remember-forgot">
          <label>
            <input type="checkbox" /> I agree to the terms and conditions
          </label>
        </div>

        {/* button submit  */}
        <button type="submit">Register</button>

        {/* chuyển tiếp qua login khi đã có account */}
        <p>
          You have an account? <Link to="/Login">Login</Link>
        </p>
      </form>
    </div>
  );
}
export default Register;
