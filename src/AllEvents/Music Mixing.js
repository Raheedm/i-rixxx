// Music Mixing.js
import Navbar from '../navbar';
import React from 'react';
import './Music Mixing.css';

const MusicMixing = () => {
  return (
    <div>
      <Navbar />
      <div className="embedded-doc-container dark-mode" style={{ left: 0, width: '100%', height: 0, position: 'relative', marginTop: '1%' }}>
        <iframe
          src="https://docs.google.com/document/d/e/2PACX-1vQvE7pKPlxZDexbM2-jnyOsQbAABsGrd0u2rhgE19s5K5d448ekW21G_zwhCiDAgRfAMqs1kpMCYJc3/pub?embedded=true"

          style={{ top: 0, left: 0, width: '100%', height: '100%', position: 'absolute', border: 0 }}

        ></iframe>
      </div>
    </div>
  );
};

export default MusicMixing;
