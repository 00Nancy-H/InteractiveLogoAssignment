// Card.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Card.css';

function Card() {
  const navigate = useNavigate();

  return (
    <div className="card">
      <button className="close-btn" onClick={() => navigate('/')}>
        &times;
      </button>

      <div className="card-img">
        <img
          src="/Secondheadshot.jpg"
          alt="Nancy"
        />
      </div>

      <div className="desc">
        <h6 className="primary-text">Nancy Huang</h6>
        <h6 className="secondary-text">UX/UI Designer and Web Developer</h6>

      </div>

          
        <a
        href="https://www.nancyhuang.com"
        target="_blank"
        rel="noopener noreferrer"
        className="portfolio-button primary-text">
        View Portfolio
      </a>
           
        <a
        href="https://www.linkedin.com/in/0nancyhuang0"
        target="_blank"
        rel="noopener noreferrer"
        className="linkedin-button second-text">
        Linkedin
      </a>


      <a
        href="https://drive.google.com/file/d/1B3kR5UrO8-f04jmKvoIQ02os52l1bIlz/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="resume-button third-text">
        Resume
      </a>
    </div>
  );
}

export default Card;
