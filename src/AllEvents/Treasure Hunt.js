// Treasure Hunt.js
import Navbar from '../navbar';
import React from 'react';
import './new.css';

const TreasureHunt = () => {
  return (
    // <div className="embedded-doc-container">
    //   <iframe
    //     src="https://docs.google.com/document/d/e/2PACX-1vS2vfV4ccgE2W1PT0OeSraSqtTRuLzNoWoYepiIY7p8iB15kcNGkOIK2MU75bX-Gw/pub"
    //     title="Embedded Google Doc"
    //     frameBorder="0"
    //     scrolling="yes"
    //   ></iframe>
    // </div>
<div>
      <Navbar/>
    <div className="embedded-doc-container dark-mode" style={{ 
      left: 0,
      width: '100%',
      height: 0,
      position: 'relative',
      
      margin: 'auto', // Center the div horizontally
    }}
  >
    <iframe
      src="https://docs.google.com/document/d/e/2PACX-1vS2vfV4ccgE2W1PT0OeSraSqtTRuLzNoWoYepiIY7p8iB15kcNGkOIK2MU75bX-Gw/pub?embedded=true"
      style={{ 
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        position: 'absolute',
        border: 0,
      }}
      allowFullScreen
    ></iframe>
  </div>
  </div>
  );
};

export default TreasureHunt;
