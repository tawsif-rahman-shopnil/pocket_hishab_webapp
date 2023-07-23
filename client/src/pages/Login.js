import React, { useState, useEffect } from "react";
import { Form, Input, message } from "antd";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "../components/Spinner";
import "../styles/Loginpage.css";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const submitHandler = async (values) => {
    setLoading(true);
    try {
      const { data } = await axios.post("/api/v1/users/login", values);
      localStorage.setItem("user", JSON.stringify({ ...data.user, password: "" }));
      navigate("/");
      message.success("Login successful");
    } catch (error) {
      message.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="login-page">
      {loading && <Spinner />}
      <div className="login-box">
      <img src="/logosplash.png" alt="Logo" /> 
 
        <Form layout="vertical" onFinish={submitHandler}>
     
        <Form.Item label={<span style={{ color: '#98ff98' }}>Email</span>} name="email">
          <Input type="email" required />
          </Form.Item>
          <Form.Item label={<span style={{ color: '#98ff98' }}>Password</span>} name="password">
          <Input type="password" required />
          </Form.Item>
          <div className="d-flex justify-content-between">
            <button className="btn">Login</button>
            <button className="btn" onClick={() => navigate('/register')}>Register !</button>
            
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
