// Gaming Events (x2).js
import Navbar from '../navbar';
import React from 'react';
import './Gaming Events (x2).css';

const GamingEvents= () => {
  return (
    <div>
    <Navbar />
    <div className="embedded-doc-container dark-mode" style={{ left: 0, width: '100%', height: 0, position: 'relative', marginTop: '1%' }}>
      <iframe
// src="https://docs.google.com/document/d/e/2PACX-1vRD05JSUAbNd6QpQwRGPFKM4RbpzULKcqIgP3ZlxViJMD9lVDjaXZ-4ay7HUB9w1JoTuTd5yNkDDEKt/pub?embedded=true"

        style={{ top: 0, left: 0, width: '100%', height: '100%', position: 'absolute', border: 0 }}

      ></iframe>
    </div>
  </div>
  );
};

export default GamingEvents;
