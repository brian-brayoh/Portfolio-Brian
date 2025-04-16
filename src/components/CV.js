import React, { forwardRef } from "react";

// This component will be used for printing/exporting the CV
const CV = forwardRef((props, ref) => (
  <div ref={ref} style={{ padding: 32, maxWidth: 800, fontFamily: 'Arial, sans-serif', color: '#222' }}>
    <h1>Brian Muthomi Mutwiri</h1>
    <p><strong>Address:</strong> Nairobi, Kenya<br/>
    <strong>Phone:</strong> 0712345678<br/>
    <strong>Email:</strong> brianmutwiri@email.com</p>
    <hr/>
    <h2>Career Profile</h2>
    <p>Dynamic and results-driven ICT professional with hands-on experience in training, technical support, and full stack development. Adept at delivering innovative solutions and effective communication across diverse teams. Passionate about technology, continuous learning, and empowering others through knowledge sharing.</p>
    <h2>Education</h2>
    <ul>
      <li><strong>Higher Diploma in Information Communication Technology</strong> – Nairobi Technical Training Institute (2022–2024)</li>
      <li><strong>Kenya Certificate of Secondary Education</strong> – St. Joseph’s Boys High School (2016–2019)</li>
    </ul>
    <h2>Experience</h2>
    <ul>
      <li><strong>ICT Trainer</strong> – Ndia Technical and Training Institute (2025–Present)<br/>
        - Delivering ICT curriculum and practical sessions<br/>
        - Mentoring students and supporting ICT projects
      </li>
      <li><strong>Volunteer IT Support</strong> – ODPP (May 2024–Feb 2025)<br/>
        - Provided technical support for staff<br/>
        - Assisted in network and system maintenance
      </li>
      <li><strong>Industrial Attachment</strong> – ODPP (Jan–Apr 2024)<br/>
        - Supported IT infrastructure and troubleshooting
      </li>
      <li><strong>Industrial Attachment</strong> – Nairobi Technical Training Institute (May–Aug 2023)<br/>
        - Assisted in ICT lab management and student support
      </li>
    </ul>
    <h2>Skills</h2>
    <ul>
      <li>Programming: JavaScript, Python, PHP, HTML, CSS</li>
      <li>Frameworks: React, Node.js, Express</li>
      <li>Database: MySQL, MongoDB</li>
      <li>Tools: Git, VS Code, Figma</li>
      <li>Other: Technical support, Training, Troubleshooting</li>
    </ul>
    <h2>Certifications & Achievements</h2>
    <ul>
      <li>Introduction to Programming – Kaggle.com</li>
      <li>Other certifications as listed in portfolio</li>
    </ul>
    <h2>Referees</h2>
    <ul>
      <li><strong>Mr. Desmond Mutuma</strong><br/>ICT Manager, Nairobi Technical Training Institute.<br/>TEL: 0717640244.<br/>E-mail: desmutuma@gmail.com</li>
      <li><strong>Mr. Enock Bore</strong><br/>Assistant Director ICT, Office of the Director of Public Prosecutions.<br/>TEL: 0725752627.<br/>Mail: Enock.bore@odpp.go.ke</li>
      <li><strong>Mr. Alexander Macharia</strong><br/>Principal ICT Officer, Office of the Director of Public Prosecutions.<br/>TEL: 0712186368.<br/>E-mail: Alexander.maina@odpp.go.ke</li>
    </ul>
  </div>
));

export default CV;
