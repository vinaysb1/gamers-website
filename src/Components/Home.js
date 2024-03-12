import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      {/* Header */}
      <div className="header">
        <div className="left">
          <span>POGR</span>
        </div>
        <div className="right">
        <button className='SignInBtn' ><Link to={'/login'}>Sign In</Link></button>
        <button className='registerBtn'><Link to={'/register'}>Register</Link></button>
      </div>
      </div>

      
      <div className="main">
      
        <div className="navbar">
          <ul>
            <li className='homeBtn' ><Link to={'/home'}>Home</Link></li>
            <li className='newsBtn' ><Link to={'/news'}>News</Link></li>
          </ul>
        </div>
        

        <div className="content">
        <Outlet /> 
        </div>
      </div>
    </div>
  );
};

export default Home;