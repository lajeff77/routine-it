import React from 'react';
import {Link} from 'react-router-dom';

const MainHeader = () => {

    return(
        <div id="main-header">
            <Link to="/" className="header-logo">
                <h1>Routine It</h1>            
            </Link>
            <Link to="/" className="header-link">
                <p>Home</p>          
            </Link>
            <Link to="/signup" className="header-link">
                <p>Sign Up</p>
            </Link>
            <Link to="/signin" className="header-link">
                <p>Sign In</p>
            </Link>
        </div>
    )
}

export default MainHeader;