// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'; // Import your own CSS file
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap's CSS file
import LandingPage from './Components/LandingPage';
import Registration from './Components/Registration';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/register" element={<Registration />} />
      </Routes>
    </Router>
  );
}

export default App;
