// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Blocks.css'; // We'll create this file for Blocks-specific styles

// const Blocks = () => {
//     const navigate = useNavigate();

//     const blocks = [
//         { title: 'Home', path: '/' },
//         { title: 'Resume', path: '/resume' },
//         { title: 'Projects', path: '/projects' },
//         { title: 'Research', path: '/research' },
//         { title: 'Contact', path: '/contact' },
//     ];

//     return (
//         <section className="blocks">
//             <div className="container">
//                 {blocks.map((block, index) => (
//                     <div
//                         key={index}
//                         className="block"
//                         data-aos="zoom-in"
//                         data-aos-delay={index * 100}
//                         onClick={() => navigate(block.path)}
//                     >
//                         <h3>{block.title}</h3>
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// };

// export default Blocks;
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos'; // Import AOS for animations
import 'aos/dist/aos.css'; // Import AOS styles
import './Blocks.css'; // Import the updated Blocks-specific styles

const Blocks = () => {
    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
        });
    }, []);

    const blocks = [
        { title: 'Home', path: '/mihir-portfolio/' },
        { title: 'Resume', path: '/mihir-portfolio/resume' },
        { title: 'Projects', path: '/mihir-portfolio/projects' },
        { title: 'Research', path: '/mihir-portfolio/research' },
        { title: 'Contact', path: '/mihir-portfolio/contact' },
    ];

    function MouseOver(event) {
        event.target.style.background = '#005E99';
    }
    function MouseOut(event){
        event.target.style.background="";
    }

    return (
        <section className="blocks">
            <div className="container1">
                {blocks.map((block, index) => (
                    <div
                        key={index}
                        className="block"
                        data-aos="zoom-in"
                        data-aos-delay={index * 100}
                        onClick={() => navigate(block.path)}
                        onMouseEnter={MouseOver}
                        onMouseLeave={MouseOut}
                    >
                        <h3 style={{color:'white'}}>{block.title}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Blocks;