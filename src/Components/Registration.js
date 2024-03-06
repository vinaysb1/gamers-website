// Registration.js
import React, { useState } from 'react';
import './Registration.css';

const Registration = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add form submission logic here
    };

    return (
        <div className="container">
            <header className="header">
                {/* Header content */}
            </header>
            <nav className="navbar">
                {/* Navbar content */}
            </nav>
            <div className="body-content">
                <div className="container registration-form-container">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Email:</label>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control" required />
                        </div>
                        <div className="form-group">
                            <label>Password:</label>
                            <input type="password" name="password" value={formData.password} onChange={handleChange} className="form-control" required />
                        </div>
                        <div className="form-group">
                            <label>Confirm Password:</label>
                            <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className="form-control" required />
                        </div>
                        <button type="submit" className="btn btn-primary">Next</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Registration;
