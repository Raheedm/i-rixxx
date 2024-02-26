// PC Building.js
import Navbar from '../navbar';
import React from 'react';
import './PC Building.css';

const PCBuilding = () => {
  return (
    <div>
      <Navbar />
      <div className="embedded-doc-container dark-mode" style={{ left: 0, width: '100%', height: 0, position: 'relative', marginTop: '1%' }}>
        <iframe
          src="https://docs.google.com/document/d/e/2PACX-1vRSXmJGin_EhGVry9vcSwdhMj-ezp5G2hhLATXQQP3HW46bxJkYQtDkIuSPKzYzCg/pub?embedded=true"

          style={{ top: 0, left: 0, width: '100%', height: '100%', position: 'absolute', border: 0 }}

        ></iframe>
      </div>
    </div>
  );
};

export default PCBuilding;
