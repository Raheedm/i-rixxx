// Debate.js

import React from 'react';
import './Debate.css';
import Navbar from '../navbar';

const Debate = () => {
  return (
    <div><Navbar/>
    <div className="embedded-doc-container dark-mode">
     
       <iframe
        src="https://docs.google.com/document/d/e/2PACX-1vTeeIXLhINr-X8rtdZI6UWryuHdK7pLr5LJYUh-nkIinkaelSPdCg94t4Mj3l5FxA/pub?embedded=true"
        style={{ top: 0, left: 0, width: '100%', height: '100%', position: 'absolute', border: 0 }}
        
    ></iframe>
    </div>
    </div>
  );
};

export default Debate;
