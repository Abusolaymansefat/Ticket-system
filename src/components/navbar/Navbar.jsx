import React, { useState } from 'react';
import img from '../../assets/logo-light.png';
import { FaPlus } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar bg-base-100 shadow-sm p-4">
      
      {/* Left: Logo + Mobile Menu */}
      <div className="navbar-start flex items-center gap-2">
        
        {/* Mobile Hamburger */}
        <div className="lg:hidden">
          <button 
            onClick={() => setMenuOpen(!menuOpen)} 
            className="btn btn-ghost p-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Dropdown Menu */}
          {menuOpen && (
            <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-2 w-52 p-2 shadow absolute z-10">
              <li><a>Home</a></li>
              <li><a>FAQ</a></li>
              <li><a>Changelog</a></li>
              <li><a>Blog</a></li>
              <li><a>Download</a></li>
              <li><a>Contact</a></li>
            </ul>
          )}
        </div>

        {/* Logo */}
        <img src={img} alt="Logo" className="w-32 h-12 object-contain" />
      </div>

      {/* Center Menu (Desktop) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          <li><a>Home</a></li>
          <li><a>FAQ</a></li>
          <li><a>Changelog</a></li>
          <li><a>Blog</a></li>
          <li><a>Download</a></li>
          <li><a>Contact</a></li>
        </ul>
      </div>

      {/* Right Button */}
      <div className="navbar-end">
        <button className="btn bg-[#422AD5] hover:bg-[#7260eb] text-white flex items-center gap-2">
          <span className="bg-white text-[#422AD5] p-1 rounded-full">
            <FaPlus size={12} />
          </span>
          New Ticket
        </button>
      </div>

    </div>
  );
};

export default Navbar;