import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Book from './pages/Book.js';
import Name from './pages/Name.js';
import UserName from './pages/UserName.js';
import Home from './pages/Home.js';
import BookName from './pages/BookName.js';
import Dashboard from './pages/Dashboard.js';

const App = () => {
  return (
  
    <Router>
      <Layout>
        <Routes> 
        <Route path="/bookName" element={<BookName />} />
        <Route path="/book" element={<Book/>} />
        <Route path="/name" element={<Name />} />
        <Route path="/username" element={<UserName />} />
        <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes> 
      </Layout>
    </Router>
  );
};

export default App;