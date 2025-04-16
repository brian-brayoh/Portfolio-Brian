import React from 'react';

const experiences = [
  {
    period: 'Mar 2025 - Present',
    title: 'ICT Trainer',
    company: 'Ndia Technical and Training Institute',
    description: [
      'Delivering hands-on training in ICT-related courses, including computer applications, networking, and database management.',
      'Developing lesson plans, instructional materials, and assessments to enhance student learning.',
      'Conducting practical sessions on software development, cybersecurity, and hardware troubleshooting.',
      'Providing mentorship and technical support to students in ICT projects and research.',
      'Integrating modern teaching methodologies and e-learning tools to improve knowledge retention.',
      'Collaborating with faculty to enhance curriculum development and ensure alignment with industry standards.',
      'Developing Ndia TVC School management system.'
    ]
  },
  {
    period: 'May 2024 - Feb 2025',
    title: 'Volunteer - IT Support',
    company: 'Office of the Director of Public Prosecutions',
    description: [
      'Developed memo management system for the ICT Department for managing incoming and outgoing memos.',
      'IT Support for the Uadilifu Case Management System.',
      'Assisted a Senior Programmer in reviewing code for developing Job Employment Portal that helped in ease of job application online.'
    ]
  },
  {
    period: 'May 2023 - Aug 2023',
    title: 'Industrial Attachment',
    company: 'Office of the Director of Public Prosecutions',
    description: [
      'Analysis of user data and information to trigger informed decision making.',
      'Installation of systems and computer applications (e.g., Microsoft Windows, Microsoft Office, IFMIS).',
      'Training staff on efficient and effective use of ICT equipment and Integrated Software Application systems (Uadilifu Case Management System, Elearning Management System, Performance Management System, Malalamishi Management System).',
      'Provision of 1st and 2nd line support to staff to troubleshoot and diagnose technical faults, configuration issues, and queries.',
      'Liaised with different departments to capture requirements and support the development of innovative ICT solutions.',
      'Digitization of Government services.'
    ]
  },
  {
    period: 'Jun 2022 - Aug 2022',
    title: 'Industrial Attachment',
    company: 'Nairobi Technical Training Institute',
    description: [
      'End user ICT support.',
      'Troubleshooting with software and hardware products (e.g., mail server and client configuration system).',
      'Installation and management of meeting applications (Zoom, Microsoft Teams).',
      'Setting up and support of Audio/Visual equipment for presentations and meetings.',
      'Network cabling.',
      'Installation and configuration of network printers.',
      'Data back-up and recovery of staff files.',
      'Installation of Windows programs and operating systems.'
    ]
  }
];

const Experience = () => (
  <section className="experience">
    <h2>Experience</h2>
    <div className="experience-list">
      {experiences.map(exp => (
        <div key={exp.period} className="experience-item">
          <h3>{exp.title} <span>@ {exp.company}</span></h3>
          <span className="exp-period">{exp.period}</span>
          <p>{exp.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Experience;
