import React from 'react';

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-logo">
      <span className="logo-accent">Mr</span> Brian
    </div>
    <ul className="navbar-links">
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
);

export default Navbar;
