import React from 'react';

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div><span className="logo-accent">Brian</span> - Innovation and excellence in every project</div>
      <ul className="footer-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer-copyright">
        &copy; 2025 <span className="logo-accent">Brian Muthomi Mutwiri</span>. All rights reserved.
      </div>
      <div className="footer-legal">
        <button type="button" className="footer-link-btn">Privacy Policy</button> | <button type="button" className="footer-link-btn">Terms of Service</button>
      </div>
    </div>
  </footer>
);

export default Footer;
