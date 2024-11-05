import React from 'react';
import './Contact.css'; // Create this file for Contact-specific styles
import ScrollToTop from '../ScrollToTop';

const Contact = () => {
    

    return (
        <section className="contact" data-aos="fade-up">
            <ScrollToTop/>
            <div className="contactbox">
                <h2>Email me at:</h2>
                <h3>mh.dgohel@gmail.com</h3>
            </div>
        </section>
    );
};

export default Contact;
