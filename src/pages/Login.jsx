import React from "react";
{
  /*link(L) điều hướng trag*/
}
import { Link, useNavigate } from "react-router-dom";
import "../style/login.css";
{
  /*thư viện icon của react*/
}
import { FaUserCircle } from "react-icons/fa";

function Login() {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    /*giả sử đăng nhập thành công*/

    localStorage.setItem("isLoggedIn", "true");

    /*chuyển hướng tới honme*/

    navigate("/home");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/*login icon*/}
        <div className="login-icon">
          <FaUserCircle size={50} color="#007bff" />
        </div>

        {/*tiêu đề*/}
        <h2>Login</h2>

        {/*input nhập liệu*/}
        <input type="email" placeholder="email" required />
        <input type="password" placeholder="Password" required />

        {/* ô nhớ để lưu ctho lần đăng nhập lần sau*/}
        <div className="remember-forgot">
          <label>
            <input type="checkbox" /> Remember me
          </label>

          {/*Link điều hướng qua trang lấy lại mk (tạm thời chưa cần chú ý)*/}
          <p>
            <Link to="/forgot-password">Forgot Password?</Link>
          </p>
        </div>

        {/*button submit*/}
        <button type="submit">Login</button>

        {/*Link điều hướng qua trang register nếu chưa có account*/}
        <p>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
