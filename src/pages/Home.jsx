import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import RoomSection from '../components/sections/RoomSection';
import AboutSection from '../components/sections/AboutSection';
import NewsletterSection from '../components/sections/NewsletterSection';

const Home = () => {
    return (
        <>
            <HeroSection />
            <RoomSection />
            <AboutSection />
            <NewsletterSection />
        </>
    );
};

export default Home;
