
import React from 'react';
import './Blind Coding.css';
import Navbar from '../navbar';

const BGMI = () => {
  return (
    <div>
      <Navbar />
      <div className="embedded-doc-container dark-mode" style={{ left: 0, width: '100%', height: 0, position: 'relative', marginTop: '1%' }}>
        <iframe
          src="https://docs.google.com/document/d/e/2PACX-1vRfe4GcQp_PirdWvMATQBGpgMmmt_im-4uoDsXbEcutoH7FwoYzaLdIALrMXWz4eIwZ5gh-HjClrOrC/pub?embedded=true"

          style={{ top: 0, left: 0, width: '100%', height: '100%', position: 'absolute', border: 0 }}

        ></iframe>
      </div>
    </div>
  );
};

export default BGMI;
