import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
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
            <Contact />
        </div>
    );
};

export default Home;