import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Form, Input } from "antd"; // Add this line to import Form and Input
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
      <img src="/logosplash.png" alt="Logo" /> {/* Using the image */}
      <Form layout="vertical" onFinish={submitHandler}>
     <Form.Item label={<span style={{ color: '#98ff98' }}>Name</span>} name="name">
       <Input type="name" required />
     </Form.Item>   
     <Form.Item label={<span style={{ color: '#98ff98' }}>Email</span>} name="email">
       <Input type="email" required />
       </Form.Item>
       <Form.Item label={<span style={{ color: '#98ff98' }}>Password</span>} name="password">
       <Input type="password" required />
       </Form.Item>
        <button className="btn">Register</button>
        <button className="btn" onClick={() => navigate('/login')}>Already Registered? Login Here!</button>
      </Form>
    </div>
  );
};

export default Register;
