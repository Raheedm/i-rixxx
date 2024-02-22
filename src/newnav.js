import React from 'react';
import '../src/newnav.css'
const NewNav = () => {
    return (
        <div className="container">
            <div className="logo">Logo</div>
            <a href="#1" className="item">Home</a>
            <a href="#2" className="item">About</a>
            <a href="#3" className="item">Contact</a>
            <a href="#4" className="item">Archive</a>
            <a href="#5" className="item">Resource</a>
            <a href="#6" className="item">Help</a>
        </div>
    );
};

export default NewNav;
