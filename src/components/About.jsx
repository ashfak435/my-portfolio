// src/components/About.jsx
import React from 'react';
import profilePic from '../assets/profile.jpeg'; // Make sure to have a profile picture in the assets folder

const About = () => {
  return (
    <section id="about" className="my-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4">
            <img src={profilePic} className="img-fluid rounded-circle" alt="Ashfaque Ahmad" />
          </div>
          <div className="col-md-8">
            <h2>About Me</h2>
            <p>
              I am a highly skilled Java Spring Boot developer with experience in designing, developing, and deploying enterprise applications. I have a proven ability to deliver high-quality, scalable, and maintainable software solutions. I am proficient in Agile methodologies and have a passion for continuous improvement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
