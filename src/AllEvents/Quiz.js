// Quiz.js
import Navbar from '../navbar';
import React from 'react';
import './Quiz.css';

const Quiz = () => {
  return (
   
    <div>
      <Navbar/>
      <div className="embedded-doc-container dark-mode" style={{ left: 0, width: '100%', height: 0, position: 'relative', marginTop:'1%' }}>
    <iframe
        src="https://docs.google.com/document/d/e/2PACX-1vSwUBTYuMYV8YZDkcc4ZYF3PH9uSmkTpOwWlkvX4gKoZhADu0aR-1pd2XXvmK-I3w/pub?embedded=true"
        style={{ top: 0, left: 0, width: '100%', height: '100%', position: 'absolute', border: 0 }}
        
    ></iframe>
</div>


    </div>
  );
};

export default Quiz;
