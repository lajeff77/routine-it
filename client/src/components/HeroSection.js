import React from 'react';
import { Link } from 'react-router-dom'


const HeroSection = () => {
    return(
        <div className='hero-section'>
            <h1>Everyone should be able to keep a routine!</h1>
            <Link to='/signup'><button>Get Started!</button></Link>
        </div>
    )
}

export default HeroSection;