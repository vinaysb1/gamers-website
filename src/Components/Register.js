import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });
      if (response.ok) {
        navigate('/login');
      } else {
        console.error('Failed to register');
      }
    } catch (error) {
      console.error('Failed to register', error);
    }
  };

  return (
    <div className="register">
      <img src="path_to_your_logo" alt="POGR Logo" />
      <h1>Get Started</h1>
      <p>Already have an account? <Link to="/login">Click to sign in</Link></p>
      <form onSubmit={handleRegister}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <input type="password" placeholder="Confirm Password" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Register;
