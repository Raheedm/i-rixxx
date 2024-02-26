// Photography.js
import Navbar from '../navbar';
import React from 'react';
import './Photography.css';

const Photography = () => {
  return (
    <div>
      <Navbar />
      <div className="embedded-doc-container dark-mode" style={{ left: 0, width: '100%', height: 0, position: 'relative', marginTop: '1%' }}>
        <iframe
          src="https://docs.google.com/document/d/e/2PACX-1vRRKa3ubkgY_XJDxZMjnl52jklJPmyDF66SQY6mLpCoIQ-bvjOLs6RWwP1cEZxqQw/pub?embedded=true"

          style={{ top: 0, left: 0, width: '100%', height: '100%', position: 'absolute', border: 0 }}

        ></iframe>
      </div>
    </div>
  );
};

export default Photography;
