// I-rix Iconic.js
import Navbar from '../navbar';
import React from 'react';
import './I-rix Iconic.css';

const icebreaker = () => {
    return (
        <div>
            <Navbar />
            <div className="embedded-doc-container dark-mode" style={{ left: 0, width: '100%', height: 0, position: 'relative', marginTop: '1%' }}>
                <iframe
                    src="https://docs.google.com/document/d/e/2PACX-1vSvidKO-yEqbmQ_9_7ovD6uFtv2bQ0fOryGqyaC4jH8zcyve3ZDik50b6NqVibw8QTv3uQl112XP51-/pub?embedded=true"

                    style={{ top: 0, left: 0, width: '100%', height: '100%', position: 'absolute', border: 0 }}

                ></iframe>
            </div>
        </div>
    );
};

export default icebreaker;
