// Settings.js
import React from 'react';
import './Settings.css';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const Settings = () => {
  return (
    <div className="main-div">
      <div className="left-div">
        <ul>
          <li>My Account</li>
          <li>Password & Security</li>
          <li>Refer a friend</li>
          <li><Link to={'/settings/support-tickets'}>Support tickets</Link></li>
       
          <li>Questions</li>
          <li>Help & Feedback</li>
        </ul>
      </div>
      <div className="right-div">
        <h1>Welcome to Settings</h1>
        <Outlet />
      </div>
    </div>
  );
};

export default Settings;
