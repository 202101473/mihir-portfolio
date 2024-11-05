import React from 'react';
import './Footer.css'; // We'll create this file for Footer-specific styles
import { FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer>
            <hr className='fseparator'/>
            <div className="container">
                <div className="socials">
                    <a href="https://linkedin.com/in/mihir-gohel-7a7500225" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                    {/* <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>
                    <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
                        <FaTwitter />
                    </a> */}
                    {/* Add more social links as needed */}
                </div>
                <p>&copy; {new Date().getFullYear()} Mihir. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
