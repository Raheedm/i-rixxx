
import React from 'react';
import './Blind Coding.css';
import Navbar from '../navbar';

const Valorant = () => {
  return (
    <div>
      <Navbar />
      <div className="embedded-doc-container dark-mode" style={{ left: 0, width: '100%', height: 0, position: 'relative', marginTop: '1%' }}>
        <iframe
          src="https://docs.google.com/document/d/e/2PACX-1vRWgVUslyprAkJjFuICCgpt3tTaoK0BOfZOGhgYk5rB_BYn5NUducVc_bRtoXAaXOkaAXLZ6yxNiU8-/pub?embedded=true"

          style={{ top: 0, left: 0, width: '100%', height: '100%', position: 'absolute', border: 0 }}

        ></iframe>
      </div>
    </div>
  );
};

export default Valorant;
