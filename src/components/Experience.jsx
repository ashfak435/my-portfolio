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
  const handleCardHover = (event) => {
    const card = event.target.closest('.experience-card');
    if (card) {
      card.classList.toggle('hovered');
    }
  };

  return (
    <section id="experience" className="my-5">
      <div className="container">
        <h2 className="text-center">Experience</h2>
        <div className="row">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="col-md-4 my-2"
              onMouseEnter={handleCardHover}
              onMouseLeave={handleCardHover}
            >
              <div className="card experience-card">
                <div className="card-body">
                  <h5 className="card-title">{experience.title}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{experience.company}</h6>
                  <p className="card-text">{experience.location}</p>
                  <p className="card-text">{experience.duration}</p>
                  <ul className="list-group list-group-flush">
                    {experience.responsibilities.map((responsibility, i) => (
                      <li key={i} className="list-group-item">{responsibility}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
