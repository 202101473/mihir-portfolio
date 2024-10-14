import React from 'react';
import './Research.css'; // Create this file for Research-specific styles

const Research = () => {
    const researchList = [
        {
            title: 'Research Paper One',
            description: 'Description of Research Paper One.',
            link: 'https://link-to-research-paper-one.com',
        },
        {
            title: 'Research Paper Two',
            description: 'Description of Research Paper Two.',
            link: 'https://link-to-research-paper-two.com',
        },
        // Add more research items as needed
    ];

    return (
        <section className="research" data-aos="fade-up">
            <div className="container">
                <h2>Research</h2>
                <div className="research-list">
                    {researchList.map((research, index) => (
                        <div key={index} className="research-item">
                            <h3>{research.title}</h3>
                            <p>{research.description}</p>
                            <a href={research.link} target="_blank" rel="noopener noreferrer">Read More</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Research;
