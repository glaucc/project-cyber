'use client';

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "./LoginStyles.scss"; // Import the SCSS file

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    rememberMe: false,
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Replace with login logic
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: newValue }));
  };

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 style={{ marginBottom: "20px", fontWeight: 600 }}>Login</h2>
        <div className="login-input-container">
          <input
            type="text"
            name="username"
            className="login-input"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div className="login-input-container">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            className="login-input"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <FontAwesomeIcon
            icon={showPassword ? faEyeSlash : faEye}
            className="password-toggle-icon"
            onClick={handleTogglePassword}
          />
        </div>
        <div className="login-label">
          <input
            type="checkbox"
            name="rememberMe"
            checked={formData.rememberMe}
            onChange={handleChange}
          />
          Remember Me
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
        <a href="/forgot-password" className="forgot-password-link">
          Forgot Password?
        </a>
        <a href="/signup" className="login-link">
          Don't have an account? Sign Up
        </a>
      </form>
    </div>
  );
};

export default LoginPage;
