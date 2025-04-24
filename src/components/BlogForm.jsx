import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const BlogForm = () => {
  const [form, setForm] = useState({ title: '', image: '', author: '', content: '' });
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:5000/api/blogs/${id}`)
        .then(res => {
          setForm(res.data);
          setLoading(false);
        })
        .catch(err => console.error(err));
    } else {
      setLoading(false);
    }
  }, [id]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = id ? `http://localhost:5000/api/blogs/${id}` : 'http://localhost:5000/api/blogs';
    const method = id ? 'put' : 'post';
    axios[method](url, form)
      .then(() => navigate('/'))
      .catch(err => console.error(err));
  };
  

  if (loading) {
    return <div className="container mt-4">Loading...</div>;
  }

  return (
    <div className="container mt-4">
      <h1>{id ? 'Edit Blog' : 'Add Blog'}</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Title</label>
          <input type="text" name="title" value={form.title || ''} onChange={handleChange} className="form-control" required />
        </div>
        <div className="mb-3">
          <label>Image URL</label>
          <input type="text" name="image" value={form.image || ''} onChange={handleChange} className="form-control" />
        </div>
        <div className="mb-3">
          <label>Author</label>
          <input type="text" name="author" value={form.author || ''} onChange={handleChange} className="form-control" required />
        </div>
        <div className="mb-3">
          <label>Content</label>
          <textarea name="content" value={form.content || ''} onChange={handleChange} className="form-control" required />
        </div>
        <button type="submit" className="btn btn-primary">{id ? 'Update' : 'Submit'}</button>
      </form>
    </div>
  );
};

export default BlogForm;
