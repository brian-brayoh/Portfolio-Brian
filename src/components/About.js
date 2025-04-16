import React from 'react';

const About = () => (
  <section className="about" id="about">
    <h2>About Me</h2>
    <p>Hi there! I'm Brian, a passionate full-stack developer with 2+ years of experience creating dynamic web and mobile applications that solve real-world problems.<br />
    My journey in tech began when I built my first website at 15, and I've been hooked ever since. I specialize in React, Node.js, and modern JavaScript, with a focus on creating accessible and performant applications that users love.<br />
    I'm a graduate from Kirinyaga University with a BSc in Software Engineering, completed in 2024.</p>
    <p><strong>MUTWIRI BRIAN MUTHOMI</strong><br/>
    P.O Box 113 – 60103, RUNYENJES<br/>
    Tel: +254746404011<br/>
    E-mail: mmuthomibrian@gmail.com</p>
    <p>A motivated, responsible and data driven individual offering excellent communication and multitasking abilities. I have experience as an attachee and Volunteer at the Office of the Director of Public Prosecutions and Nairobi Technical Training Institute. I excel in Network Administration, Software development, IT support, IT Security, and proficiency in systems including Windows, Printers, routers, Cloud technologies (Microsoft Azure), ERP systems, and Database applications. Self-directing and committed to meeting deadlines with minimal supervision. I uphold the highest standards of integrity and ensure my conduct is above reproach at all times.</p>
    <ul className="about-details">
      <li><strong>Name:</strong> <span className="about-highlight">Brian Muthomi Mutwiri</span></li>
      <li><strong>Email:</strong> <span className="about-highlight">mmuthomibrian@gmail.com</span></li>
      <li><strong>Phone:</strong> <span className="about-highlight">+254746404011</span></li>
      <li><strong>Address:</strong> <span className="about-highlight">P.O Box 113 – 60103, RUNYENJES, Nairobi, Kenya</span></li>
      <li><strong>Experience:</strong> <span className="about-highlight">2+ Years</span></li>
      <li><strong>Education:</strong> <span className="about-highlight">BSc Software Engineering</span></li>
    </ul>
    <h3>Education Background</h3>
    <ul className="education-details">
      <li><strong>Bachelor of Science in Software Engineering</strong>, Kirinyaga University (2020–2024)<br/>
        <em>Final Year Project:</em> Gate Pass Management System
      </li>
      <li><strong>Kenya Certificate of Secondary Education</strong>, Ciamanda Secondary School (2016–2019)</li>
    </ul>
    <div className="about-education">
      <h3>Education</h3>
      <div><strong>2020 - 2024</strong> — BSc in Software Engineering, Kirinyaga University</div>
      <div>Graduated with honors in Software Engineering with focus on web development, database design, and software architecture principles.</div>
    </div>
  </section>
);

export default About;
