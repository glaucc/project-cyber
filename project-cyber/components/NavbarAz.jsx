import React from "react";
import Image from 'next/image'
import Link from "next/link";
import Logo from '../public/static/bruto.jpg';
import '../styles/navbarAz.css';

const NavbarAz = () => {
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
      <Link href="/az">
        <div className="homebtn nav-item">Bruto</div>
      </Link>

      {/* Rest of the navigation items */}
      <div className="nav-items">
        <Link href="/az/learn">
          <div className="nav-item navitemss">Öyrən</div>
        </Link>
        <Link href="/az/paths">
          <div className="nav-item navitemss">Karyera</div>
        </Link>
        <Link href="/az/learn/content/career-quiz">
          <div className="nav-item navitemss">Karyera Testi</div>
        </Link>
        <Link href="/az/shop">
          <div className="nav-item navitemss">Mağaza</div>
        </Link>
        <Link href="/az/login">
          <div className="nav-item navitemss">Daxil Ol</div>
        </Link>
        <Link href="/az/signup">
          <div className="nav-item navitemss">Qeydiyyat</div>
        </Link>
          <Link href="/">
        <div className="nav-item navitemss">
            Dil
        </div>
          </Link>
      </div>
    </div>
  );
};

export default NavbarAz;
