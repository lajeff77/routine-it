import React from 'react';
import MainHeader from '../components/LandingPage/MainHeader';
import HeroSection from '../components/LandingPage/HeroSection';
import SummarySection from '../components/LandingPage/SummarySection';
import Footer from '../components/Common/Footer';

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