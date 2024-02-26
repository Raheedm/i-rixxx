// Reel Making.js
import Navbar from '../navbar';
import React from 'react';
import './new.css';

const ReelMaking = () => {
  return (
    
     <div>
     <Navbar/>
     <div className="embedded-doc-container dark-mode" style={{ left: 0, width: '100%', height: 0, position: 'relative', marginTop:'1%' }}>
   <iframe
       src="https://docs.google.com/document/d/e/2PACX-1vRMkgbCUrpU4LHchT_XehAfY_QHHaM003MZ18f5U50MQfXN2GKEegowOe1oLnY2fg/pub?embedded=true"
       style={{ top: 0, left: 0, width: '100%', height: '100%', position: 'absolute', border: 0 }}
       
   ></iframe>
</div>
</div>
  );
};

export default ReelMaking;
