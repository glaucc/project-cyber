'use client';

import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const SignUpContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${(props) => props.theme.backgroundColor};
`;

const SignUpForm = styled.form`
  max-width: 400px;
  width: 100%;
  padding: 40px;
  background-color: ${(props) => props.theme.textColor};
  color: ${(props) => props.theme.backgroundColor};
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SignUpInputContainer = styled.div`
  position: relative;
  width: 100%;
  right: 0.66rem;
`;

const SignUpInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.textColor};
  outline: none;
  transition: border-color 0.2s ease-in-out, background-color 0.2s ease-in-out,
    color 0.2s ease-in-out;

  &:focus {
    border-color: #35baf6;
    background-color: #f0f0f0;
  }
`;

const PasswordToggleIcon = styled(FontAwesomeIcon)`
  position: absolute;
  top: 30%;
  right: 0.1rem;
  transform: translateY(-50%);
  cursor: pointer;
`;

const SignUpLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;

  input[type="checkbox"] {
    margin-right: 10px;
  }
`;

const SignUpButton = styled.button`
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 4px;
  background-color: ${(props) => props.theme.linkHoverColor};
  color: ${(props) => props.theme.backgroundColor};
  cursor: pointer;
  transition: background-color 0.2s ease-in-out, transform 0.2s ease-in-out;

  &:hover {
    background-color: #35baf6;
    transform: scale(1.05);
  }
`;

const LoginLink = styled.a`
  margin-top: 20px;
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => props.theme.linkHoverColor};
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #35baf6; /* Change to the color you want on hover */
  }
`;

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    verifyPassword: "",
    rememberMe: false,
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Replace with sign-up logic
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
    <SignUpContainer>
      <SignUpForm onSubmit={handleSubmit}>
        <h2 style={{ marginBottom: "20px", fontWeight: 600 }}>Sign Up</h2>
        <SignUpInput
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
        />
        <SignUpInput
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <SignUpInputContainer>
          <SignUpInput
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <PasswordToggleIcon
            icon={showPassword ? faEyeSlash : faEye}
            onClick={handleTogglePassword}
          />
        </SignUpInputContainer>
        <SignUpInputContainer>
          <SignUpInput
            type={showPassword ? "text" : "password"}
            name="verifyPassword"
            placeholder="Verify Password"
            value={formData.verifyPassword}
            onChange={handleChange}
          />
          <PasswordToggleIcon
            icon={showPassword ? faEyeSlash : faEye}
            onClick={handleTogglePassword}
          />
        </SignUpInputContainer>
        <SignUpLabel>
          <input
            type="checkbox"
            name="rememberMe"
            checked={formData.rememberMe}
            onChange={handleChange}
          />
          Remember Me
        </SignUpLabel>
        <SignUpButton type="submit">Sign Up</SignUpButton>
        <LoginLink href="/login">Have an account? Login</LoginLink>
      </SignUpForm>
    </SignUpContainer>
  );
};

export default SignUpPage;
