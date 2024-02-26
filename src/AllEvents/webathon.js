// EmbeddedGoogleDoc.jsx
import Navbar from '../navbar';
import React from 'react';
import './EmbeddedGoogleDoc.css';

const EmbeddedGoogleDoc = () => {
  return (
    // <div className="embedded-doc-container">
    //   <iframe
    //     src="https://docs.google.com/document/d/e/2PACX-1vRD05JSUAbNd6QpQwRGPFKM4RbpzULKcqIgP3ZlxViJMD9lVDjaXZ-4ay7HUB9w1JoTuTd5yNkDDEKt/pub?embedded=true"
    //     title="Embedded Google Doc"
    //     frameBorder="0"
    //     scrolling="yes"
    //   ></iframe>
    // </div>
    <div>
      <Navbar />
      <div className="embedded-doc-container dark-mode" style={{ left: 0, width: '100%', height: 0, position: 'relative', marginTop: '1%' }}>
        <iframe
          src="https://docs.google.com/document/d/e/2PACX-1vRD05JSUAbNd6QpQwRGPFKM4RbpzULKcqIgP3ZlxViJMD9lVDjaXZ-4ay7HUB9w1JoTuTd5yNkDDEKt/pub?embedded=true"
          style={{ top: 0, left: 0, width: '100%', height: '100%', position: 'absolute', border: 0 }}

        ></iframe>
      </div>
    </div>

  );
};

export default EmbeddedGoogleDoc;
