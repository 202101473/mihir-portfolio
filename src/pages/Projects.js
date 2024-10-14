import React from 'react';
import './Projects.css'; // Create this file for Projects-specific styles

const Projects = () => {
    const projectList = [
        {
            title: 'Project One',
            description: 'Description of Project One.',
            link: 'https://github.com/yourprofile/project-one',
        },
        {
            title: 'Project Two',
            description: 'Description of Project Two.',
            link: 'https://github.com/yourprofile/project-two',
        },
        // Add more projects as needed
    ];

    return (
        <section className="projects" data-aos="fade-up">
            <div className="container">
                <h2>Projects</h2>
                <div className="project-list">
                    {projectList.map((project, index) => (
                        <div key={index} className="project">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
