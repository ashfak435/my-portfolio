// src/components/Skills.jsx
import React from 'react';

const skills = [
  { name: 'Java', level: 90 },
  { name: 'Spring Boot', level: 85 },
  { name: 'JavaScript (React.JS)', level: 80 },
  { name: 'HTML/CSS', level: 75 },
  { name: 'Ruby on Rails', level: 70 },
];

const Skills = () => {
  return (
    <section id="skills" className="my-5">
      <div className="container">
        <h2 className="text-center">Skills</h2>
        <div className="row">
          {skills.map((skill, index) => (
            <div key={index} className="col-md-6 my-2">
              <h5>{skill.name}</h5>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: `${skill.level}%` }}
                  aria-valuenow={skill.level}
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  {skill.level}%
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
