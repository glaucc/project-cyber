import React, { useState } from "react";
import Link from "next/link";
import styled, { ThemeProvider } from "styled-components";

const lightTheme = {
  backgroundColor: "#f8f8f8",
  textColor: "#333",
  linkHoverColor: "#555",
};

const darkTheme = {
  backgroundColor: "#222",
  textColor: "#f8f8f8",
  linkHoverColor: "#ddd",
};

const NavbarContainer = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: default;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }

  @media (max-width: 425px) {
    max-width: 100vw;
  }
`;

const NavItems = styled.div`
  align-items: center;

  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

const NavItem = styled.a`
  color: ${(props) => props.theme.textColor};
  font-size: 16px;
  margin: 0 10px;
  text-decoration: none;
  padding: 10px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.linkHoverColor};
  }
`;

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <NavbarContainer>
        <Link href="/">
          <NavItem>Home</NavItem>
        </Link>
        <NavItems className="navitems">
          <Link href="/learn">
            <NavItem className="navitemss">Learn</NavItem>
          </Link>
          <Link href="/practice">
            <NavItem className="navitemss">Practice</NavItem>
          </Link>
          <Link href="/paths">
            <NavItem className="navitemss">Paths</NavItem>
          </Link>
          <Link href="/login">
            <NavItem className="navitemss">Login</NavItem>
          </Link>
          <Link href="/signup">
            <NavItem className="navitemss">Sign Up</NavItem>
          </Link>
          <NavItem className="navitemss" onClick={toggleDarkMode}>
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </NavItem>
        </NavItems>
      </NavbarContainer>
    </ThemeProvider>
  );
};

export default Navbar;
