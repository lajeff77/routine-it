import React from 'react';
import MainHeader from '../components/MainHeader';
import HeroSection from '../components/HeroSection';
import SummarySection from '../components/SummarySection';
import Footer from '../components/Footer';

const LandingPage = () => {

    return (
        <div>
            <MainHeader/>
            <HeroSection/>
            <SummarySection/>
            <Footer />
        </div>
    )
}

export default LandingPage;