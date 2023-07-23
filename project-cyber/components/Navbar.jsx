import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { useTheme, lightTheme, darkTheme } from "../components/ThemeContext";
import '../styles/navbar.css';

// const NavbarContainer = styled.div`
//   background-color: ${(props) => props.theme.backgroundColor};
//   padding: 20px;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   cursor: default;

//   @media only screen and (max-width: 768px) {
//     flex-direction: column;
//     justify-content: center;
//   }

//   @media only screen and (max-width: 425px) {
//     max-width: 100vw;
//   }
// `;

// const NavItems = styled.div`
//   align-items: center;

//   @media only screen and (max-width: 768px) {
//     margin-top: 10px;
//   }
// `;

// const NavItem = styled.a`
//   color: ${(props) => props.theme.textColor};
//   font-size: 16px;
//   margin: 0 10px;
//   text-decoration: none;
//   padding: 10px;
//   border-radius: 5px;
//   transition: background-color 0.3s ease;
//   cursor: pointer;

//   &:hover {
//     background-color: ${(props) => props.theme.linkHoverColor};
//   }
// `;

const Navbar = () => {
  const { theme, toggleDarkMode } = useTheme();

  const handleDarkModeToggle = () => {
    console.log("it's working");
    toggleDarkMode();
  };

  return (
    <div className="navbar-container">
      <Link href="/">
        <div className="homebtn nav-item">Home</div>
      </Link>
      <div className="nav-items">
        <Link href="/learn">
          <div className="nav-item navitemss">Learn</div>
        </Link>
        <Link href="/practice">
          <div className="nav-item navitemss">Practice</div>
        </Link>
        <Link href="/paths">
          <div className="nav-item navitemss">Paths</div>
        </Link>
        <Link href="/login">
          <div className="nav-item navitemss">Login</div>
        </Link>
        <Link href="/signup">
          <div className="nav-item navitemss">Sign Up</div>
        </Link>
        <div className="nav-item navitemss" onClick={handleDarkModeToggle}>
          {theme === lightTheme ? "Dark Mode" : "Light Mode"}
        </div>
      </div>
    </div>
  );
};

export default Navbar;