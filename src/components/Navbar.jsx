import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link to="/" className="navbar-brand">Blog App</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/add-blog" className="nav-link">Add Blog</Link>
            </li>
            <li className="nav-item">
              <Link to="/signin" className="nav-link">Sign In</Link>
            </li>
            <li className="nav-item">
              <Link to="/signup" className="nav-link">Sign Up</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
