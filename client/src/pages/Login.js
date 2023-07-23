import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/Loginpage.css";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  
  const submitHandler = async (values) => {
    try {
      setLoading(true);
      const { data } = await axios.post("/api/v1/users/login", values);
      setLoading(false);
      localStorage.setItem("user", JSON.stringify({ ...data.user, password: "" }));
      navigate("/");
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="login-box">
      <h2>Login</h2>
      <form onSubmit={submitHandler}>
        <div className="user-box">
          <input type="text" name="username" required="" />
          <label>Username</label>
        </div>
        <div className="user-box">
          <input type="password" name="password" required="" />
          <label>Password</label>
        </div>
        <Link to="#">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Login
        </Link>
        <Link className="signup-link" to="/register">Sign Up</Link>
      </form>
    </div>
  );
};

export default Login;
