import React from 'react';

const skills = [
  { name: 'React.js', level: '90%', color: '#2b7cff' },
  { name: 'JavaScript', level: '85%', color: '#f7b731' },
  { name: 'Node.js', level: '75%', color: '#27ae60' },
  { name: 'PHP', level: '70%', color: '#6c63ff' },
  { name: 'React Native', level: '65%', color: '#00bcd4' },
  { name: 'UI/UX Design', level: '50%', color: '#ff5e62' },
  { name: 'CSS/SASS', level: '90%', color: '#e75480' },
  { name: 'TypeScript', level: '70%', color: '#007acc' },
  { name: 'MongoDB', level: '75%', color: '#4db33d' },
  { name: 'Responsive Design', level: '95%', color: '#ff5e62' }
];

const Skills = () => (
  <>
    <section className="skills">
      <h2>My Skills</h2>
      <div className="skills-list">
        {skills.map(skill => {
          const colorClass = skill.name.toLowerCase().replace(/[^a-z]/g, '');
          return (
            <div key={skill.name} className="skill">
              <span>{skill.name}</span>
              <div className="skill-bar">
                <div className={`skill-level ${colorClass}`} style={{ width: skill.level }}></div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
    <h3>Certifications & Achievements</h3>
    <ul className="certifications-list">
      <li>Introduction to Programming – Kaggle.com</li>
      <li>Introduction to Pandas – Kaggle.com</li>
      <li>Introduction to Machine Learning – Kaggle.com</li>
      <li>Python Essential 1 – Cisco Academy</li>
      <li>Ethical Hacker – Cisco Academy</li>
      <li>Introduction to Cyber Security – Cisco Academy</li>
    </ul>
  </>
);

export default Skills;
