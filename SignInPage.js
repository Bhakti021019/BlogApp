import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../api';

const SignInPage = ({ setIsAuthenticated }) => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/auth/signin', formData);
            alert('Sign in successful!');
            setIsAuthenticated(true);
            localStorage.setItem('token', response.data.token);
            navigate('/');
        } catch (error) {
            alert('Sign in failed. Try again.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
            <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
            <button type="submit">Sign In</button>
        </form>
    );
};

export default SignInPage;
