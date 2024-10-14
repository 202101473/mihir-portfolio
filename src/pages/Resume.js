import React from 'react';
import './Resume.css'; // Create this file for Resume-specific styles

const Resume = () => {
    return (
        <section className="resume" data-aos="fade-up">
            <div className="container">
                <h2>Resume</h2>
                <p>Here you can include your resume details or embed a PDF viewer.</p>
                {/* You can use react-pdf or provide a download link */}
                <a href="/path-to-your-resume.pdf" download className="download-btn">Download Resume</a>
            </div>
        </section>
    );
};

export default Resume;
