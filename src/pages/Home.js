import React from 'react';
import Intro from '../components/Intro';
import Blocks from '../components/Blocks';
import ScrollToTop from '../ScrollToTop';

const Home = () => {
    return (
        <div>
            <ScrollToTop />
            <Intro />
            <Blocks />
        </div>
    );
};

export default Home;
