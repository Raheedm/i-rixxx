// Fastest Typing.js
import Navbar from '../navbar';
import React from 'react';
import './Fastest Typing.css';

const FastestTyping = () => {
  return (
    <div>
      <Navbar />
      <div className="embedded-doc-container dark-mode" style={{ left: 0, width: '100%', height: 0, position: 'relative', marginTop: '1%' }}>
        <iframe
          src="https://docs.google.com/document/d/e/2PACX-1vTTIkwaiUypncvJ2KNUE4vFDJ4dWrEvlf7hZbsF0VewQ5Esh52YMB-ZjA_SsNP9wg/pub?embedded=true"

          style={{ top: 0, left: 0, width: '100%', height: '100%', position: 'absolute', border: 0 }}

        ></iframe>
      </div>
    </div>
  );
};

export default FastestTyping;
