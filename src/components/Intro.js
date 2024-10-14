import React from 'react';
import './Intro.css'; // We'll create this file for Intro-specific styles
import yourPhoto from '../images/your-photo.jpg'; // Place your photo in src/images/

const Intro = () => {
    return (
        <section className="intro" data-aos="fade-right">
            <div className="container">
                <div className="intro-text">
                    <h2>Hello, I'm Mihir</h2>
                    <p>Welcome to my portfolio website.</p>
                </div>
                <div className="intro-image">
                    <img src={yourPhoto} alt="Mihir's Photo" />
                </div>
            </div>
        </section>
    );
};

export default Intro;
