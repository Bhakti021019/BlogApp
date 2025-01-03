import React from 'react';
import { useNavigate } from 'react-router-dom';
import BlogForm from '../components/BlogForm';
import API from '../api';

const CreateBlogPage = () => {
    const navigate = useNavigate();

    const handleCreate = async (data) => {
        await API.post('/', data);
        navigate('/');
    };

    return (
        <div className="container mt-4">
            <h1>Create Blog</h1>
            <BlogForm onSubmit={handleCreate} />
        </div>
    );
};

export default CreateBlogPage;
