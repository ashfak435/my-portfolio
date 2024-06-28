import React from 'react';
import './Projects.css';

const projects = [
  {
    name: 'Google CWS DCR High Risk Pub Items',
    link: 'https://chromewebstore.google.com/',
    description: ['Implemented user safety protocols within Chrome, resulting in a 30% decrease in potential threats and a 20% improvement in user trust and satisfaction.', 'Executed a comprehensive cybersecurity audit in the Chrome environment, achieving a 40% reduction in security vulnerabilitie.'],
    technologies: 'HTML, JavaScript, CSS, jQuery, and Google-provided tools.',
  },
  {
    name: 'Cognizant Animal Welfare',
    link: 'https://github.com/ashfak435/Animal-Welfare-Cognizant-',
    description: ['Spearheaded the development of a full-stack project with ReactJS frontend and Spring Boot backend, resulting in a 40% increase in user engagement.',' Led backend development efforts, enhancing application security by 25%.','Implemented user-centric functionalities such as querying, fund raise and donation, improving user satisfaction by 30%.'],
    technologies: 'Java, Spring Boot, RestAPIs, HTML, JavaScript, CSS, jQuery, and ReactJS.',
  },
  {
    name: 'SebamedUSA',
    link: 'https://www.sebamedusa.com',
    description: ['Developed responsive pages using Ruby on Rails, resulting in a 30% increase in user engagement and a 25% improvement in site responsiveness.','Implemented MVC architecture with Ruby on Rails for backend functionality, achieving 15% increase in efficiency.', 'Designed and optimized frontend features to enhance user experience, resulting in improved site usability metrics.'],
    technologies: 'MVC, Ruby, Ruby on Rails framework, JavaScript, HTML, CSS, jQuery, Bootstrap.',
  },
  {
    name: 'Facial Aging',
    link: 'https://github.com/ashfak435/CA1_Face_Aging',
    description: ['Developed a model capable of processing images and predicting the age of individuals depicted in the images.', 'Utilized advanced machine learning concepts, including GANs, to train and deploy the age prediction model, achieving an impressive accuracy rate of 98.7%.','Demonstrated proficiency in image processing algorithms, ensuring precise and accurate age predictions.'],
    technologies: 'Python, Spider, Machine learning, GANs, Google Colaboratory.',
  },
];

const Project = ({ name, link, description, technologies }) => {
  return (
    <div className="project-card auto-show">
      <div className="project-image">
       
      </div>
      <div className="project-details">
        <h3 className="project-title">
          <a href={link} target="_blank" rel="noopener noreferrer">
            {name}
          </a>
        </h3>
        <ul>
          <p className="project-description">{description.map((str,index)=>{
            return (
              
                <li key={index}>{str}</li>
              
              );
            })}
          </p>
        </ul>
        <div className="project-technologies">
          <span>Technologies:</span>
          <ul className="tech-list">
            {technologies.split(',').map((tech, i) => (
              <li key={i} className="tech-item">
                {tech.trim()}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="text-center hollow-text auto-show">Projects</h2>
        <div className="project-grid">
          {projects.map((project, index) => (
            <Project
              key={index}
              name={project.name}
              link={project.link}
              description={project.description}
              technologies={project.technologies}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;