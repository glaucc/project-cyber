import React from "react";
import Image from 'next/image'

import Link from "next/link";
import styled from "styled-components";
import {useTheme, lightTheme, darkTheme}  from "../components/ThemeContext";
import Logo from '../public/bruto.jpg';
import '../styles/navbar.css';

// Styled component for the logo image
const LogoImage = styled.img`
margin-right: 10px; /* Add some spacing between the logo and the "Home" button */
// height: 40px; /* Adjust the height as needed */
`;

const Navbar = () => {

  const { theme, toggleDarkMode } = useTheme();
  // console.log(theme)

  const handleDarkModeToggle = () => {
    console.log("it's working");
    toggleDarkMode();
    console.log(theme)


  };

  return (
    <div className="navbar-container" style={theme}>
      {/* Logo */}
      
      <Link href='/' className='logoIcon flex gap-2 flex-center'>
        <Image
          src={Logo}
          alt='logo'
          width={70}
          height={70}
          className='logoIcon object-contain'
        />
        </Link>
          
        

      {/* Home Button */}
      <Link href="/">
        <div className="homebtn nav-item">Home</div>
      </Link>

      {/* Rest of the navigation items */}
      <div className="nav-items">
        <Link href="/learn">
          <div className="nav-item navitemss">Learn</div>
        </Link>
        <Link href="/practice">
          <div className="nav-item navitemss">Practice</div>
        </Link>
        <Link href="/learn/content/career-quiz">
          <div className="nav-item navitemss">Career Quiz</div>
        </Link>
        <Link href="/login">
          <div className="nav-item navitemss">Login</div>
        </Link>
        <Link href="/signup">
          <div className="nav-item navitemss">Sign Up</div>
        </Link>
        <div className="nav-item navitemss">
          Language
        </div>
      </div>
    </div>
  );
};

export default Navbar;
