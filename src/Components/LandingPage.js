// LandingPage.js
import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
    return (
        <div>
            <header className="header">
                <div className="header-container">
                    <div className="left-side">
                        <span className="game-name">POGR</span>
                        <img src="path_to_your_logo_image" alt="POGR Logo" className="logo" />
                    </div>
                    <div className="right-side">
                        <button className="login-button">Signin</button>
                        <button className="register-button">Register</button>
                    </div>
                </div>
            </header>
            <nav className="navbar">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">News</a></li>
                </ul>
            </nav>
            <div className="body-content">
                <h1>LEVEL UP WITH POGR</h1>
                <div className="image-container">
                    <img src="path_to_your_image" alt="Level Up with POGR" />
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
