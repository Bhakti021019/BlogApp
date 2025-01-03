import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../api';

const SignUpPage = () => {
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/auth/signup', formData);
            console.log(response.data); // Log or use the response data
            alert('Sign up successful!');
            navigate('/'); // Redirect to home
        } catch (error) {
            console.error(error);
            alert('Sign up failed. Try again.');
        }
    };
    

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
            <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
            <button type="submit">Sign Up</button>
        </form>
    );
};

export default SignUpPage;
