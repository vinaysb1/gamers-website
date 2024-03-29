import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import { useAuth } from './Auth';

function Login() {
const {login} = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });
      const data = await response.json();
      if (response.ok) {
        login(data.token);
        navigate('/dashboard');
      } else {
        alert('Failed to login');
      }
    } catch (error) {
     console.error('Failed to login', error);
    }
  };

  return (
    <div className="login">
      <img src={require('../assets/images.jpg')} alt="POGR Logo" />
      <h1>Welcome Back</h1>
      <p>Don't have an account? <Link to="/register">Create a new one</Link></p>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
