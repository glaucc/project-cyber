import React from "react";
import Image from 'next/image'

import Link from "next/link";
import Logo from '../public/bruto.jpg';
import '../styles/navbar.css';

// Styled component for the logo image

const Navbar = () => {

  

  return (
    <div className="navbar-container">
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
        <Link href="/paths">
          <div className="nav-item navitemss">Paths</div>
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
