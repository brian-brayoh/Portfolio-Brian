import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  // State for GitHub repositories
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch public repos from GitHub
    fetch('https://api.github.com/users/brian-brayoh/repos?per_page=100&sort=updated')
      .then(res => res.json())
      .then(data => {
        setRepos(Array.isArray(data) ? data : []);
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo" style={{display:'flex', alignItems:'center', gap:'12px'}}>
          <img src="/468A3186.JPG" alt="Brian Muthomi Mutwiri logo" style={{width:'40px',height:'40px',borderRadius:'50%',objectFit:'cover',border:'2px solid #3a86ff'}} />
          Brian Muthomi Mutwiri
        </div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <img src="/468A3186.JPG" alt="Brian Muthomi Mutwiri" style={{width:'120px',height:'120px',borderRadius:'50%',objectFit:'cover',border:'3px solid #3a86ff',marginBottom:'18px',boxShadow:'0 4px 24px rgba(58,134,255,0.10)'}} />
        <h1>Brian Muthomi Mutwiri</h1>
        <h2>Software Engineer</h2>
        <p>Building scalable, robust, and elegant solutions for the web and beyond.</p>
        <div className="hero-actions">
          <a className="btn" href="#projects">My Projects</a>
          <a className="btn" href="/cv.pdf" download>Download Full CV (pdf)</a>
         
        </div>
        <div className="skills-list">
          <span>React</span><span>JavaScript</span><span>Node.js</span><span>PHP</span><span>Python</span><span>Dart</span>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <h2>About Me</h2>
        <p>Hi! I'm Brian, a passionate software engineer based in Nairobi, Kenya, with experience building web and mobile applications that solve real-world problems. I love working with modern JavaScript, React, Node.js, and more. I enjoy collaborating with teams and contributing to open-source projects.</p>
        <ul>
          <li><strong>Name:</strong> Brian Muthomi Mutwiri</li>
          <li><strong>Email:</strong> mmuthomibrian@gmail.com</li>
          <li><strong>Location:</strong> Nairobi, Kenya</li>
          <li><strong>Experience:</strong> 2+ Years</li>
          <li><strong>Education:</strong> BSc Software Engineering</li>
        </ul>
      </section>

      {/* Projects Section - Dynamic from GitHub */}
      <section id="projects" className="projects-section">
        <h2>GitHub Projects</h2>
        {loading ? (
          <div>Loading projects...</div>
        ) : (
          <div className="projects-list">
            {repos.length === 0 && <div>No public projects found.</div>}
            {[
              {
                name: 'NTVC-portal',
                description: 'A portal system for NTVC institution management.',
                image: '/previews/ntvc-portal.png',
              },
              {
                name: 'memo-management-system',
                description: 'A PHP-based memo management system for efficient document workflow.',
                image: '/previews/memo-management-system.png',
              },
              {
                name: 'final-project',
                description: 'Gate pass management system for secure facility access.',
                image: '/previews/final-project.png',
              },
              {
                name: 'cartracking',
                description: 'A PHP-based car tracking solution for fleet management and security.',
                image: '/previews/cartracking.png',
              },
            ].map(project => (
              <div className="project-card" key={project.name}>
                <img
                  src={project.image}
                  alt={project.name + ' preview'}
                  style={{ width: '100%', borderRadius: '8px', marginBottom: '1em', objectFit: 'cover', minHeight: '120px', background: '#e7eaf6' }}
                  onError={e => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/400x200?text=Project+Preview'; }}
                />
                <h3>{project.name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</h3>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <h2>Contact</h2>
        <ul>
          <li><strong>Email:</strong> mmuthomibrian@gmail.com</li>
          <li><strong>Location:</strong> Nairobi, Kenya</li>
        </ul>
        <form className="contact-form">
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <textarea placeholder="Your Message" required></textarea>
          <button className="btn" type="submit">Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div>Brian Muthomi Mutwiri &copy; {new Date().getFullYear()}. All rights reserved.</div>
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </footer>
    </div>
  );
}


export default App;
