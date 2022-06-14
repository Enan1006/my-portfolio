import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Hero from '../Hero/Hero';
import Portfolio from '../Portfolio/Portfolio';
import Services from '../Services/Services';
import MessengerCustomerChat from 'react-messenger-customer-chat';


const Home = () => {
    return (
        <div>
            <Hero />
            <About />
            <Services />
            <Portfolio />
            <Contact />
            <MessengerCustomerChat
                pageId="107779455300338"
                appId="436606324588003"
            />
        </div>
    );
};

export default Home;