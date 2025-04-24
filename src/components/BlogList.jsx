import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Added useNavigate for navigation
import axios from 'axios';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:5000/api/blogs')
      .then((res) => setBlogs(res.data))
      .catch((err) => console.error(err));
  }, []);

  const deleteBlog = (id) => {
    axios.delete(`http://localhost:5000/api/blogs/${id}`)
      .then(() => setBlogs(blogs.filter(blog => blog._id !== id)))
      .catch(err => console.error(err));
  };

  return (
    <div className="container mt-4">
      <h1>Blogs</h1>
      <div className="row">
        {blogs.map((blog) => (
          <div key={blog._id} className="col-md-4 mb-4">
            <div className="card h-100">
              <img src={blog.image} className="card-img-top" alt={blog.title} />
              <div className="card-body">
                <h5 className="card-title">{blog.title}</h5>
                <p className="card-text">{blog.content}</p>
                <p className="card-text">
                  <small className="text-muted">By {blog.author}</small>
                </p>
                <div className="d-flex justify-content-between">
                  {/* Edit Button */}
                  <button
                    className="btn btn-primary"
                    onClick={() => navigate(`/edit-blog/${blog._id}`)}
                  >
                    Edit
                  </button>
                  {/* Delete Button */}
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteBlog(blog._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
