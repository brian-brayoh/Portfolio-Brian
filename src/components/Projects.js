import React from 'react';

const projects = [
  {
    title: 'Gate Pass Management System',
    description: 'Final Year Project: A system for managing gate passes and enhancing campus security at Kirinyaga University.',
    type: 'Full Stack',
    tech: ['Java', 'SQL', 'HTML', 'CSS'],
    role: 'Lead Developer',
    link: '#'
  },
  {
    title: 'School Management System',
    description: 'A web-based platform for managing student records, attendance, and grades.',
    type: 'Full Stack',
    tech: ['React', 'Node.js', 'MongoDB'],
    role: 'Full Stack Developer',
    link: '#'
  },
  {
    title: 'Printcare Enterprises Ltd',
    description: 'A business management portal for print services, inventory, and invoicing.',
    type: 'Frontend',
    tech: ['React', 'JavaScript'],
    role: 'Frontend Developer',
    link: '#'
  },
  {
    title: 'Memo Management Portal',
    description: 'A portal for creating, tracking, and managing memos within an organization.',
    type: 'Backend',
    tech: ['Node.js', 'Express', 'MongoDB'],
    role: 'Backend Developer',
    link: '#'
  },
];

const Projects = () => (
  <section className="projects" id="projects">
    <h2>My Projects</h2>
    <div className="projects-list">
      {projects.map(project => (
        <div key={project.title} className={`project-card ${project.type.toLowerCase()}`}> 
          <div className={`project-type-badge badge-${project.type.toLowerCase()}`}>{project.type}</div>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
