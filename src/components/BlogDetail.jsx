import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/blogs/${id}`)
      .then(res => setBlog(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!blog) return <p>Loading...</p>;

  return (
    <div className="container mt-4">
      <h1>{blog.title}</h1>
      {blog.image && <img src={blog.image} alt={blog.title} className="img-fluid" />}
      <p><strong>Author:</strong> {blog.author}</p>
      <p>{blog.content}</p>
    </div>
  );
};

export default BlogDetail;
