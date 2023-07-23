import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/RegisterPage.css";

const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  
  const submitHandler = async (values) => {
    try {
      setLoading(true);
      await axios.post("/api/v1/users/register", values);
      setLoading(false);
      navigate("/login");
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
      <h2>Register</h2>
      <form onSubmit={submitHandler}>
        <div className="user-box">
          <input type="text" name="name" required="" />
          <label>Name</label>
        </div>
        <div className="user-box">
          <input type="email" name="email" required="" />
          <label>Email</label>
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
          Register
        </Link>
        <Link className="signup-link" to="/login">Login Here!</Link>
      </form>
    </div>
  );
};

export default Register;
