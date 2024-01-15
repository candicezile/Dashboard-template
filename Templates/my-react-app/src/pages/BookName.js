import React from 'react';
import { Link } from 'react-router-dom';

const BookName = () => {
  const bookList = JSON.parse(localStorage.getItem('bookList')) || [];

  const limitedBookList = bookList.slice(0, 5); 

  return (
    <div>
      <h1>BookName</h1>

      {limitedBookList.length > 0 ? (
        <div>
          <ul>
            {limitedBookList.map((book, index) => (
              <li key={index}>{book}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p></p>
      )}

      <main>
        <nav>
          <ul>
            <Link to="/dashboard">Dashboard</Link><br></br>
            <Link to="/home">Home</Link><br></br>
          </ul>
        </nav>
      </main>
    </div>
  );
};

export default BookName;
