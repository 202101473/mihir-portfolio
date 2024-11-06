import React from 'react';
import './Resume.css'; // Create this file for Resume-specific styles
import ScrollToTop from '../ScrollToTop';

const Resume = () => {
    return (
        <section className="resume" data-aos="fade-up">
            <ScrollToTop />
            <div className='resumebox'>
                <h2>My CV</h2>
                <hr className='reseparator'></hr>
                <u style={{color:'white'}}><h3>Education</h3></u>
                <p style={{fontSize:24}}>Dhirubhai Ambani Institute of Information and Communication Technology</p>
                <p style={{fontSize:16}}>B.Tech (Honors) in Information and Communication Technology with minors in Computational Science </p>
                <p style={{fontSize:16}}>2021-2025 (expected)</p>
                <hr className='reseparator'></hr>
                <u style={{color:'white'}}><h3>Experience</h3></u>
                <p style={{fontSize:24}}>Gupta Lab</p>
                <p style={{fontSize:16}}>Research Part-time</p>
                <p style={{fontSize:16}}>June2022-Present</p>
                <hr className='reseparator'></hr>
                <u style={{color:'white'}}><h3>Research</h3></u>
                <ul style={{color:'white',font:16}}>
                    <li>S. Doshi, M. Gohel, and M. K. Gupta, “A bird-eye view on dna storage simulators,” arXiv preprint arXiv:2404.04877,
                    2024.<a href='https://arxiv.org/abs/2404.04877' style={{color:'#00A4B4'}} target="_blank" rel="noopener noreferrer"> <u>Link</u></a></li>
                    <li>M. Gohel, S. Doshi and M. K. Gupta, ”JPEG-DNA Simulations Standards,” preprint.<a style={{color:'#00A4B4'}} target="_blank" rel="noopener noreferrer"> <u>Link</u></a></li>
                </ul>
                <hr className='reseparator'></hr>
                <u style={{color:'white'}}><h3>Projects</h3></u>
                <ul style={{color:'white',font:16}}>
                    <li>DNA cloud 3.14</li>
                    <li>Noise Simulator(ISO)</li>
                    <li>Image Compression(BIS)</li>
                </ul>
                <hr className='reseparator'></hr>
                <u style={{color:'white'}}><h3>Technical Skills</h3></u>
                <ul style={{color:'white',fontSize:24}}>
                    <li>Tech used in Project/Research:<p style={{fontSize:16}}>Python, DNA-sequencing, DNA-replication, Synthetic Biology, Simulation Software, Encoders,
                    Decoders, Software Development </p></li>
                    <li>Areas of Interest:<p style={{fontSize:16}}>DNA data storage, JPEG-DNA, DNA cloud computing, DNA storage simulator, JPEG,
                    JPEG-DNA codec, Image compression, HVS, Image quality assessment algorithms (IQA), Machine Learning</p></li>
                    <li>Programming languages:<p style={{fontSize:16}}>Python, C, C++, MATLAB, Kotlin, HTML, CSS, SQL</p></li>
                    <li>Tools & Technologies:<p style={{fontSize:16}}>Visual Studio, Git, PostgreSQL, React</p></li>
                </ul>
                <hr className='reseparator'></hr>
                <u style={{color:'white'}}><h3>Extra-Curricular Activities</h3></u>
                <p style={{color:'white',fontSize:24}}>DCEI - Core Outreach Team</p>
                <ul style={{color:'white',fontSize:16}}>
                    <li>Organized a successful hackathon in February 2023 as part of Swadheenta, facilitating innovation and collaboration
                    among participants.</li>
                    <li>Actively engaged in networking with entrepreneurs and organizing entrepreneurship-related events at DAIICT through
                    DCEI, fostering a culture of innovation and business development.</li>
                    <li>Served as an active member of the Entrepreneurship Cell, organizing events, workshops, and networking opportunities to
                    promote innovation, startup culture, and entrepreneurial skills among students.</li>
                </ul>
                <p style={{fontSize:16,marginTop:'16px'}}>October 2022 - October 2023</p>
            </div>
        </section>
    );
};

export default Resume;
