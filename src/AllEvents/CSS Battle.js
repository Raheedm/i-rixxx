// CSS Battle.js
import Navbar from '../navbar';
import React from 'react';
import './CSS Battle.css';

const CSSBattle = () => {
  return (
    <div>
      <Navbar />
      <div className="embedded-doc-container dark-mode" style={{ left: 0, width: '100%', height: 0, position: 'relative', marginTop: '1%' }}>
        <iframe
          src="https://docs.google.com/document/d/e/2PACX-1vRqNuc08TXDwhlgn2d_vF-WPaEuzUHqE2XN_d53Gm1BFHozOFDsnHx4zNFwashvMw/pub?embedded=true"

          style={{ top: 0, left: 0, width: '100%', height: '100%', position: 'absolute', border: 0 }}

        ></iframe>
      </div>
    </div>
  );
};

export default CSSBattle;
