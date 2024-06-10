import React from 'react';

const projects = [
  {
    name: 'Google CWS DCR High Risk Pub Items',
    link: 'https://chromewebstore.google.com/',
    description: 'Implemented user safety protocols within Chrome, resulting in a 30% decrease in potential threats and a 20% improvement in user trust and satisfaction.',
    technologies: 'HTML, JavaScript, CSS, jQuery, and Google-provided tools.',
  },
  {
    name: 'Cognizant Animal Welfare',
    link: 'https://github.com/ashfak435/Animal-Welfare-Cognizant-',
    description: 'Spearheaded the development of a full-stack project with ReactJS frontend and Spring Boot backend, resulting in a 40% increase in user engagement. Led backend development efforts, enhancing application security by 25%.',
    technologies: 'Java, Spring Boot, RestAPIs, HTML, JavaScript, CSS, jQuery, and ReactJS.',
  },
  {
    name: 'SebamedUSA',
    link: 'https://www.sebamedusa.com',
    description: 'Developed responsive pages using Ruby on Rails, resulting in a 30% increase in user engagement and a 25% improvement in site responsiveness. Implemented MVC architecture with Ruby on Rails for backend functionality, achieving 15% increase in efficiency.',
    technologies: 'MVC, Ruby, Ruby on Rails framework, JavaScript, HTML, CSS, jQuery, Bootstrap.',
  },
  {
    name: 'Facial Aging',
    link: 'https://github.com/ashfak435/CA1_Face_Aging',
    description: 'Developed a model capable of processing images and predicting the age of individuals depicted in the images. Utilized advanced machine learning concepts, including GANs, to train and deploy the age prediction model, achieving an impressive accuracy rate of 98.7%.',
    technologies: 'Python, Spider, Machine learning, GANs, Google Colaboratory.',
  },
];

const Project = ({ name, link, description, technologies }) => {
  return (
    <div className="col-md-6 my-2">
      <div className="card project-card">
        <div className="card-body">
          <h5 className="card-title">
            <a href={link} target="_blank" rel="noopener noreferrer">{name}</a>
          </h5>
          <p className="card-text">{description}</p>
          <h6 className="card-subtitle mb-2 text-muted">Technologies: {technologies}</h6>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="my-5">
      <div className="container">
        <h2 className="text-center">Projects</h2>
        <div className="row">
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
