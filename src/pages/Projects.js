import React from 'react';
import './Projects.css'; // Create this file for Projects-specific styles
import ScrollToTop from '../ScrollToTop';

const Projects = () => {

    return (
        
        <section className="projects" data-aos="fade-up">
            <ScrollToTop />
            <div className="projectbox">
                <h2>Projects</h2>
                <hr className='prseparator'></hr>
                <u style={{color:'white'}}><h3><a class='atag' href='https://www.guptalab.org/dnacloud/downloads.htm' target="_blank" rel="noopener noreferrer">DNA cloud 3.14</a></h3></u>
                <h3 style={{color:'#00A4B4',fontSize:20}}>January 2022 - April 2022</h3>
                <ul style={{color:'white',fontSize:16}}>
                    <li>Upgraded DNA Cloud 2.0 to DNA Cloud 3.14 using Python, enhancing the platform’s capabilities for DNA cloud
                    software.</li>
                    <li>Integrated Goldman encoding and decoding algorithms alongside the existing Golay system, providing dual
                    encoding/decoding support in DNA Cloud 3.14.</li>
                    <li>Introduced new features such as storage estimation for predicting .dnac file sizes and cost estimation based on encoded
                    files, further improving DNA Cloud’s functionality.</li>
                </ul>
                <hr className='prseparator'></hr>
                <u style={{color:'white'}}><h3>Noise Simulator(ISO)</h3></u>
                <h3 style={{color:'#00A4B4',fontSize:20}}>January 2024 - May 2024</h3>
                <ul style={{color:'white',fontSize:16}}>
                    <li>Developed a channel noise simulation framework to analyze the behavior of various JPEG-DNA compression schemes
                    under noisy conditions.</li>
                    <li>Conducted a 34-hour experimental analysis using the AIC dataset, resulting in key insights into the performance and
                    robustness of JPEG-DNA based codec under simulated noise conditions.</li>
                </ul>
                <hr className='prseparator'></hr>
                <u style={{color:'white'}}><h3>Image Compression(BIS)</h3></u>
                <h3 style={{color:'#00A4B4',fontSize:20}}>May 2024 - July 2024</h3>
                <ul style={{color:'white',fontSize:16}}>
                    <li>Reviewed various image compression formats, with a focus on their strengths and applications.</li>
                    <li>Conducted an in-depth analysis of JPEG standards, including compression techniques, evaluation methods, system
                    architectures, and further exploration of the format.</li>
                    <li>Examined nine key parameters for image quality evaluation, providing a comprehensive framework for assessing
                    compressed image fidelity.</li>
                </ul>
            </div>
        </section>
    );
};

export default Projects;
