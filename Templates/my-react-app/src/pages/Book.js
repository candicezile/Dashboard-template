import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Book = () => {
  const [book, setBook] = useState('');
  const [bookList, setBookList] = useState([]);

  const displayVariable = (e) => {
    e.preventDefault();
    const newBookList = [...bookList, book];
    setBookList(newBookList);
    localStorage.setItem('bookList', JSON.stringify(newBookList));
    setBook('');
  };

  return (
    <div className="Form">
      <h1>Book</h1><br />
      <input id="book" type="text" value={book} onChange={(e) => setBook(e.target.value)} /><br /><br />
      <button type="submit" className='button3' onClick={displayVariable}>Add</button>

      <main>
        <nav>
          <ul>
          <button className='button4'>
          <Link to="/bookname">BookName</Link>

          </button>

          </ul>
        </nav>
      </main>
    </div>
  );
};

export default Book;
