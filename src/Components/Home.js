import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './Auth';

const Home = () => {
  const {isLoggedIn, logout} = useAuth();
  const Navigate = useNavigate();
  const handleSignOut = () => {
    logout();

    Navigate('/login');
  }
  return (
    <div className="home-container">
      {/* Header */}
      <div className="header">
        <div className="left">
          <span>POGR</span>
        </div>
        <div className="right">
          {
            isLoggedIn ? (  
              <button className='logoutBtn' onClick={handleSignOut}>Logout</button>
            ) : (
              <>
              <button className='SignInBtn' ><Link to={'/login'}>Sign In</Link></button>
        <button className='registerBtn'><Link to={'/register'}>Register</Link></button>
        </>
            )
          }
        
      </div>
      </div>

      
      <div className="main">
      
        <div className="navbar">
          <ul>
            <li className='homeBtn' ><Link to={'/home'}>Home</Link></li>
            <li className='newsBtn' ><Link to={'/news'}>News</Link></li>
            <li className='newsBtn' ><Link to={'/settings'}>Settings</Link></li>
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