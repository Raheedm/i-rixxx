// Code with C.js
import Navbar from '../navbar';
import React from 'react';
import './Code with C.css';

const CodewithC = () => {
  return (
    <div>
      <Navbar />
      <div className="embedded-doc-container dark-mode" style={{ left: 0, width: '100%', height: 0, position: 'relative', marginTop: '1%' }}>
        <iframe
          src="https://docs.google.com/document/d/e/2PACX-1vTxgxBeROrwDE3FA3I1Xg_2YNW5dmwy_FJUrQhGdL57o7GfJHSpVCzGqPCYzoshtLvR3B7aXam3Qtnx/pub?embedded=true"

          style={{ top: 0, left: 0, width: '100%', height: '100%', position: 'absolute', border: 0 }}

        ></iframe>
      </div>
    </div>
  );
};

export default CodewithC;
