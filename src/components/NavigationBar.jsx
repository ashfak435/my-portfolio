import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone } from 'react-icons/fa';

const NavigationBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#home">Ashfaque Ahmad</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#experience">Experience</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="mailto:ashfaque87075@gmail.com">
                <FaEnvelope size={30} />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.linkedin.com/in/ashfaque1x" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={30} />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://github.com/ashfak435" target="_blank" rel="noopener noreferrer">
                <FaGithub size={30} />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="tel:+918707502140">
                <FaPhone size={30} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
