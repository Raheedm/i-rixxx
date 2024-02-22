import React, { useState } from 'react';
import './nav.css';
import headingLogo from './assets/ximagecopy.png';
import InstagramIcon from './assets/SVGs/instaWhite.svg';
import irix from './assets/logomain.svg';

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleBrochureClick = () => {
        // Assuming you have the PDF file in the public folder
        const pdfUrl = process.env.PUBLIC_URL + '/I-RIX_2K24.pdf';
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'I-RIX_2K24.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="home-container">
            {/* Navbar for larger screens */}
            <nav className="navbar desktop-navbar">
            <ul className="nav-left">
      <li className="brochure-item" onClick={handleBrochureClick}>
        Brochure
      </li>
    </ul>

                <div className="logo-container">
                    <img src={irix} alt="irix-logo" className="logo" />
                </div>
                <ul className="nav-right">
                    <a href='/eventregister'>
                        <li className="register-item">Register</li>
                    </a>

                    <li className="instagram-item">
                        <a href="https://www.instagram.com/irix_pccas/" target="_blank">
                            <img src={InstagramIcon} alt="instagram" />
                        </a>
                    </li>
                </ul>
            </nav>

            {/* Mobile menu */}
            <div className="mobile-menu">
                <div className="mobile-menu-header">
                    <div className="logo-container">
                        <img src={irix} alt="irix-logo" className="logo" />
                    </div>
                    <button
                        className="mobile-menu-icon"
                        onClick={toggleMobileMenu}
                    >
                        ☰
                    </button>
                </div>
                {isMobileMenuOpen && (
                    <ul className="mobile-menu-content">
                        <li className="brochure-item" onClick={toggleMobileMenu}>
                            Brochure
                        </li>
                        <li className="register-item" onClick={toggleMobileMenu}>
                            Register
                        </li>
                        <li className="instagram-item" onClick={toggleMobileMenu}>
                            <a href="https://www.instagram.com/irix_pccas/" target="_blank">
                                <img src={InstagramIcon} alt="instagram" />
                            </a>
                        </li>
                    </ul>
                )}
            </div>

            {/* Main Content */}
            {/* <div className="main-content">
                <iframe
                    src="https://my.spline.design/untitled-8ee3f75bab73baada3a7fe424dd7e6b4/"
                    frameBorder="0"
                    width="100%"
                    height="100%"
                    className="iframe"
                ></iframe>
                <img src={headingLogo} alt="I-RIX" className="heading-logo" />
            </div> */}


        </div>
    );
};

export default Navbar;
