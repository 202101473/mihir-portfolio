import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // We'll create this file for Header-specific styles
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
    const [isMobile, setIsMobile] = useState(false);

    const toggleMenu = () => {
        setIsMobile(!isMobile);
    };

    return (
        <header className="header">
            <div className="container">
                <h1 className="logo">Mihir</h1>
                <nav className={isMobile ? 'nav-mobile' : 'nav'}>
                    <ul>
                        <li>
                            <Link to="/mihir-portfolio/" onClick={() => setIsMobile(false)}>Home</Link>
                        </li>
                        <li>
                            <Link to="/mihir-portfolio/resume" onClick={() => setIsMobile(false)}>Resume</Link>
                        </li>
                        <li>
                            <Link to="/mihir-portfolio/projects" onClick={() => setIsMobile(false)}>Projects</Link>
                        </li>
                        <li>
                            <Link to="/mihir-portfolio/research" onClick={() => setIsMobile(false)}>Research</Link>
                        </li>
                        <li>
                            <Link to="/mihir-portfolio/contact" onClick={() => setIsMobile(false)}>Contact</Link>
                        </li>
                    </ul>
                </nav>
                <div className="menu-toggle" onClick={toggleMenu}>
                    {isMobile ? <FaTimes /> : <FaBars />}
                </div>
            </div>
            <hr className='separator'/>
        </header>
    );
};

export default Header;
