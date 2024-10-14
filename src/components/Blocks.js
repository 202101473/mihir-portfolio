import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Blocks.css'; // We'll create this file for Blocks-specific styles

const Blocks = () => {
    const navigate = useNavigate();

    const blocks = [
        { title: 'Home', path: '/' },
        { title: 'Resume', path: '/resume' },
        { title: 'Projects', path: '/projects' },
        { title: 'Research', path: '/research' },
        { title: 'Contact', path: '/contact' },
    ];

    return (
        <section className="blocks">
            <div className="container">
                {blocks.map((block, index) => (
                    <div
                        key={index}
                        className="block"
                        data-aos="zoom-in"
                        data-aos-delay={index * 100}
                        onClick={() => navigate(block.path)}
                    >
                        <h3>{block.title}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Blocks;
