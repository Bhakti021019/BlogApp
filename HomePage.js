import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = ({ isAuthenticated, setIsAuthenticated }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsAuthenticated(false);
        navigate('/signin');
    };

    return (
        <div>
            <h1>Home</h1>
            {isAuthenticated ? (
                <>
                    <button onClick={() => navigate('/create-blog')}>Create Blog</button>
                    <button onClick={handleLogout}>Logout</button>
                </>
            ) : (
                <>
                    <button onClick={() => navigate('/signin')}>Sign In</button>
                    <button onClick={() => navigate('/signup')}>Sign Up</button>
                </>
            )}
        </div>
    );
};

export default HomePage;
