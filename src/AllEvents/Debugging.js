// Debugging.js

import React from 'react';
import './EmbeddedGoogleDoc.css';
import Navbar from '../navbar';

const Debugging = () => {
  return (
    <div>
      <Navbar/>
    
    <div className="embedded-doc-container dark-mode">
      <iframe
        src="https://docs.google.com/document/d/e/2PACX-1vQj2Nh1mMQlAIzpWM611BZbP4cC4vC9xGqULW3PyI_8ugUKvdGjP_Cu6eD_yuuDkVVpnAdt__f2YQpT/pub?embedded=true"
        style={{ top: 0, left: 0, width: '100%', height: '100%', position: 'absolute', border: 0 }}
        
    ></iframe>
    </div>
    </div>
  );
};

export default Debugging;
