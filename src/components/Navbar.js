// src/components/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-accent border-b border-neutral text-neutral backdrop-filter backdrop-blur-lg shadow-md">
      <div className="container mx-auto px-4">
        <div className="navbar">
          <div className="flex-1">
            <a href="#home" className="btn btn-ghost normal-case text-xl">
              <strong>My Portfolio</strong>
            </a>
          </div>
          <div className="flex-none">
            {/* Responsive Dropdown for Mobile */}
            <div className="dropdown dropdown-end lg:hidden">
              <label tabIndex="0" className="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </label>
              <ul tabIndex="0"
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            {/* Horizontal Menu for Desktop */}
            <ul className="menu menu-horizontal hidden lg:flex p-0">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
