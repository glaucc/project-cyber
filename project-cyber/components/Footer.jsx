
import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
  @media (max-width: 425px) {
    max-width: 100vw;
    

  }
  
`;

const FooterText = styled.p`
  font-size: 1rem;
  margin-bottom: 10px;
`;

const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>&copy; {new Date().getFullYear()} Your Cybersecurity Learning Platform. All rights reserved.</FooterText>
      <FooterText>
        Developed with <span style={{ color: "#e74c3c" }}>&hearts;</span> by{" "}
        <FooterLink href="https://www.yourwebsite.com" target="_blank">
          Your Company
        </FooterLink>
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;
