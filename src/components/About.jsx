import React from 'react';
import './style/About.css';

const About = () => {
  return (
    <div className="about-container">
      <div>
        <h2 className="about">About the app</h2>
        <p className="about-content">
          This application lets us add to-dos, edit, and delete items. Log in to
          see the delete feature. It also persists to-dos in the browser's local
          storage for a subsequent visit.
        </p>
      </div>
    </div>
  );
};
export default About;
