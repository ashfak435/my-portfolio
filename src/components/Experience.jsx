import React from 'react';
import './Experience.css'; // Import CSS for styling

const experiences = [
  {
    title: 'Software Engineer',
    company: 'Human Resocia',
    location: 'Tokyo, Japan',
    duration: '11/2023 - Present',
    responsibilities: [
      'Tasked with the creation of user-friendly designs, while also spearheading the development of APIs to ensure seamless integration.',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'Cognizant Technology Solutions',
    location: 'Noida, India',
    duration: '01/2022 - 10/2023',
    responsibilities: [
      'Enhanced Chrome user security by 30% through proactive identification of malicious extensions using iCaster and Buganizer.',
      'Optimized backend functionalities, achieving a 25% system performance increase with technologies including Spring Boot, Maven, and MySQL.',
      'Implemented secure data handling practices using MySQL, improving data integrity by 15%.',
    ],
  },
  {
    title: 'Associate Software Developer',
    company: 'BlueBash Consulting Pvt.Ltd.',
    location: 'Mohali, India',
    duration: '01/2021 - 07/2021',
    responsibilities: [
      'Boosted efficiency by 30% through the development of responsive pages using MVC architecture with the Ruby on Rails framework.',
      'Achieved a 25% improvement in website responsiveness and user engagement by designing and implementing a responsive web page using Ruby on Rails integrated with MVC architecture, Ruby, JavaScript, HTML, CSS, jQuery, and Bootstrap.',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="experience-section artistic">
      <div className="container">
        <h2 className="text-center hollow-text mb-5">Experience</h2>
        <div className="card-grid">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ExperienceCard = ({ experience }) => {
  const { title, company, location, duration, responsibilities } = experience;

  return (
    <div className="experience-card">
      <div className="experience-header">
        <h3 className="title">{title}</h3>
        <div className="company-location">
          <p className="company">{company}</p>
          <p className="location">
            <i className="fas fa-map-marker-alt"></i> {location}
          </p>
        </div>
        <p className="duration">{duration}</p>
      </div>
      <div className="experience-details">
        <ul className="responsibilities">
          {responsibilities.map((responsibility, i) => (
            <li key={i} className="responsibility">
              <span className="achievement">+ </span>
              
              {responsibility}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Experience;