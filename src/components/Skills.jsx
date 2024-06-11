// src/components/Skills.jsx
import React from 'react';
import './Skills.css';

const skills = [
  { name: 'Java', icon: 'fab fa-java' },
  { name: 'Spring Boot', icon: 'fas fa-leaf' },
  { name: 'JavaScript (React.JS)', icon: 'fab fa-react' },
  { name: 'HTML/CSS', icon: 'fab fa-html5' },
  { name: 'Ruby on Rails', icon: 'fas fa-gem' },
  { name: 'jQuery', icon: 'fas fa-code' },
  { name: 'Microservices', icon: 'fas fa-cubes' },
  { name: 'Git', icon: 'fab fa-git' },
  { name: 'GitHub', icon: 'fab fa-github' },
  { name: 'MySQL', icon: 'fas fa-database' },
  { name: 'Bootstrap', icon: 'fab fa-bootstrap' },
  { name: 'Code Debugging', icon: 'fas fa-bug' },
  { name: 'Servlet', icon: 'fas fa-file-code' },
  { name: 'JSP', icon: 'fas fa-file-code' },
  { name: 'Maven', icon: 'fas fa-hammer' },
  { name: 'Vite', icon: 'fas fa-bolt' },
  { name: 'RESTful APIs', icon: 'fas fa-server' },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="text-center mb-5 hollow-text">Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">
                <i className={skill.icon}></i>
              </div>
              <div className="skill-details">
                <h5>{skill.name}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
