// Tech-Glam.js
import Navbar from '../navbar';
import React from 'react';
import './Tech-Glam.css';

const TechGlam = () => {
  return (
    <div>
      <Navbar />
      <div className="embedded-doc-container dark-mode" style={{ left: 0, width: '100%', height: 0, position: 'relative', marginTop: '1%' }}>
        <iframe
          src="https://docs.google.com/document/d/e/2PACX-1vRJTweZNJJa1ltrXpR-KDSe3jh5eRU5fROeXGnOdQa1fhNj1M--CpHhCG4IJfG22g/pub?embedded=true&theme=dark"

          style={{ top: 0, left: 0, width: '100%', height: '100%', position: 'absolute', border: 0 }}

        ></iframe>
      </div>
    </div>
  );
};

export default TechGlam;
