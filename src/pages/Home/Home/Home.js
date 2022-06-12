import React from 'react';
import About from '../About/About';
import Hero from '../Hero/Hero';
import Portfolio from '../Portfolio/Portfolio';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Hero />
            <About />
            <Services />
            <Portfolio />
        </div>
    );
};

export default Home;