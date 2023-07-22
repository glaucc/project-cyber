import React from "react";
import Link from "next/link";
import styled from "styled-components";

const NavbarContainer = styled.div`
  background-color: #f8f8f8; /* Light background color */
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: default; /* Change the default cursor to the default arrow */

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }

  @media (max-width: 425px) {
    max-width:100vw;
  }
`;

const NavItems = styled.div`
  align-items: center;

  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

const NavItem = styled.a`
  color: #333; /* Light text color */
  font-size: 16px;
  margin: 0 10px;
  text-decoration: none;
  padding: 10px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  cursor: pointer; /* Change the cursor to a pointer on hover */

  &:hover {
    background-color: #555;
  }
`;

const Navbar = () => {
  return (
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
      </NavItems>
    </NavbarContainer>
  );
};

export default Navbar;
