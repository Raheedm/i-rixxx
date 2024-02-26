// Byte Quest.js
import Navbar from '../navbar';
import React from 'react';
import './Byte Quest.css';

const ByteQuest = () => {
  return (
    <div>
      <Navbar />
      <div className="embedded-doc-container dark-mode" style={{ left: 0, width: '100%', height: 0, position: 'relative', marginTop: '1%' }}>
        <iframe
          src="https://docs.google.com/document/d/e/2PACX-1vQfS_LCwwW8ITFPvceVsfyxvTMGZoNTM5b0MmKDMufZBVTP_Z81cIgwP_v1ZU44sg/pub?embedded=true"

          style={{ top: 0, left: 0, width: '100%', height: '100%', position: 'absolute', border: 0 }}

        ></iframe>
      </div>
    </div>
  );
};

export default ByteQuest;
