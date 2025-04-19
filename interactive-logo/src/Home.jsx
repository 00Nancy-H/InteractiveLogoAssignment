// Home.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="frame-container">
      <h1 className="ml1">
        <span className="text-wrapper">
          <span className="line line1"></span>
          <span className="letters">Hi, I'm Nancy</span>
          <span className="line line2"></span>
        </span>
      </h1>

      <img
        src="/headshot.jpg"
        alt="Professional Headshot"
        className="framed-headshot"
        onClick={() => navigate('/profile')}
      />
    </div>
  );
}

export default Home;
