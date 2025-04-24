import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import BlogList from './components/BlogList';
import BlogForm from './components/BlogForm';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<BlogList />} />
        <Route path="/add-blog" element={<BlogForm />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
};

export default App;
