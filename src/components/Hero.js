import React from 'react';

import profileImg from '../assets/profile.jpg';
import DownloadCVButton from './DownloadCVButton';

const Hero = () => (
  <section className="hero" id="home">
    <img src="/468A3186.JPG" alt="Brian Muthomi Mutwiri" className="hero-profile" />
    <h1>Brian Muthomi Mutwiri</h1>
    <h2>Full Stack Developer</h2>
    <p>Crafting elegant solutions to complex problems through clean, efficient code and innovative design thinking.</p>
    <div className="hero-buttons">
      <a href="#projects" className="btn">My Projects</a>
      {/* Download CV button generates PDF from portfolio content */}
      <DownloadCVButton />
    </div>
    <div className="hero-skills">
      <span className="skill-badge react">React</span>
      <span className="skill-badge js">JavaScript</span>
      <span className="skill-badge node">Node.js</span>
      <span className="skill-badge php">PHP</span>
      <span className="skill-badge mobile">Mobile Dev</span>
      <span className="skill-badge rn">React Native</span>
    </div>
  </section>
);

export default Hero;
