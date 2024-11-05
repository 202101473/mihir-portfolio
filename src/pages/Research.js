import React from 'react';
import './Research.css'; // Create this file for Research-specific styles
import ScrollToTop from '../ScrollToTop.js'

const Research = () => {
    return (
        <section className="research" data-aos="fade-up">
            <ScrollToTop />
            <div className="researchbox">
            <h2>Research</h2>
                <hr className='prseparator'></hr>
                <u style={{color:'white'}}><h3><a href='https://arxiv.org/abs/2404.04877' class='atag' target="_blank" rel="noopener noreferrer">A Bird-Eye view on DNA Storage Simulators</a></h3></u>
                <ul style={{color:'white',fontSize:16}}>
                    <li>"A Bird-Eye View on DNA Storage Simulators" examines three prominent simulators in DNA data storage, covering processes such as encoding, synthesis, storage conditions, sequencing, clustering, reconstruction, and decoding. This paper also delves into key biological principles, including GC content, K-mer windows, homopolymers, motifs, and PCR.</li>
                    <li> These simulators were chosen for their distinct approaches and unique contributions to various stages of DNA data storage</li>
                    <li> The paper provides a comprehensive comparison of the simulators, highlighting their strengths, weaknesses, and potential applications in DNA data storage research.</li>
                </ul>
                <hr className='prseparator'></hr>
                <u style={{color:'white'}}><h3><a href='https://arxiv.org/abs/2404.04877' class='atag' target="_blank" rel="noopener noreferrer">JPEG-DNA Simulation Standards</a></h3></u>
                <ul style={{color:'white',fontSize:16}}>
                    <li>"JPEG-DNA Simulation Standards," proposes a model for standardization in DNA storage simulators designed specifically for JPEG image storage.</li>
                    <li> The primary objective was to develop a JPEG-DNA codec capable of preserving image quality through the entire DNA storage pipeline, with minimal errors upon retrieval.</li>
                    <li> The proposed blueprint of the simulator in the research paper supports the testing of JPEG-DNA codecs tailored to DNA data storage requirements.</li>
                </ul>
            </div>
        </section>
    );
};

export default Research;
