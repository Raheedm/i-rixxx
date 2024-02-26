// Partners.js

import React from 'react';
import './Partners.css'; // Import the CSS file for styling

const Partners = ({ sponsors }) => {
  return (
    <div className="partners-container">
      <h2 style={{fontFamily:'Blanka',color:'white'}} >Our Sponsors</h2>
      <div className="logos-container">
        {sponsors.map((sponsor, index) => (
          <img key={index} src={sponsor.logo} alt={sponsor.name} className="sponsor-logo" />
        ))}
      </div>
    </div>
  );
};

export default Partners;
