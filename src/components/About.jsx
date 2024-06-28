// src/components/About.jsx
import React, { useEffect, useState } from 'react';
import profilePic from '../assets/profile.jpeg'; // Make sure to have a profile picture in the assets folder


const About = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  const [currentText1, setCurrentText1] = useState('');
  const [currentIndex1, setCurrentIndex1] = useState(0);

  const text='I am a highly skilled Java Spring Boot developer with experience in designing, developing, and deploying enterprise applications. I have a proven ability to deliver high-quality, scalable, and maintainable software solutions. I am proficient in Agile methodologies and have a passion for continuous improvement. My proficiency extends to cybersecurity, having contributed to a project where I utilized JavaScript, HTML, CSS, and jQuery, and honed skills in code debugging and malware detection.';
  const text1="About Me";
  const delay=30;
  const infinite=true;

  useEffect(() => {
    let timeout;
    if (currentIndex1 < text1.length) {
      setTimeout(() => {
        setCurrentText1(currentText1 + text1[currentIndex1]);
        setCurrentIndex1(currentIndex1 + 1);
      }, delay);

    }
    else if (currentIndex < text.length) {
      timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);

    } else if (infinite) {
      setTimeout(() => {
        setCurrentIndex(0);
        setCurrentText('');
      }, 3000);
      
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, delay, infinite, text, text1, currentIndex1, currentText1]);

  return (
    <section id="about" className="my-5 ">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4 auto-show ">
            <div className="profile-pic-container">
              <img src={profilePic} className="img-fluid " alt="Ashfaque Ahmad" />
            </div>
          </div>
          <div className="col-md-8 auto-show ">
            <h2 className="hollow-text">{currentText1}</h2>
            <p className="animated-text">
              {currentText}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
