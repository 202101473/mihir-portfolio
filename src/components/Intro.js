import React from 'react';
import './Intro.css'; // We'll create this file for Intro-specific styles
import yourPhoto from '../images/your-photo.jpg'; // Place your photo in src/images/

const Intro = () => {
    return (
        <div className='other'>
            <section className="intro" data-aos="fade-right">
                <div className="container">
                    <div className="intro-text">
                        <h2>Hello, I'm Mihir</h2>
                        <p style={{marginTop:'25px'}}>I'm a final year Btech student at DAIICT.</p>
                        <p style={{marginTop:'15px'}}>I'm fascinated by emerging tech like DNA data storage and JPEG-DNA, using ML to drive innovation in these evolving fields.</p>
                    </div>
                    <div className="intro-image">
                        <img src={yourPhoto} alt='mihir' />
                    </div>
                </div>
            </section>
            <hr className='separator'/>
        </div>
    );
};

export default Intro;
