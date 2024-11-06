import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import Research from './pages/Research';
import Contact from './pages/Contact';

import './App.css';

function App() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/mihir-portfolio/" exact element={<Home />} />
                <Route path="/mihir-portfolio/resume" element={<Resume />} />
                <Route path="/mihir-portfolio/projects" element={<Projects />} />
                <Route path="/mihir-portfolio/research" element={<Research />} />
                <Route path="/mihir-portfolio/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
