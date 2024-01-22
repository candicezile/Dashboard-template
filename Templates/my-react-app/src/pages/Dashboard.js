import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = ({ children }) => {
  const getLocalStorageLength = () => {
    const storedData = localStorage.getItem('bookList');
    const storedData1 = localStorage.getItem('nameList');

    const bookList = JSON.parse(storedData) || [];
    const nameList = JSON.parse(storedData1) || [];

    const length = bookList.length;
    const length1 = nameList.length;

    return { length, length1 };
  };

  const { length: localStorageLength, length1: localStorageLength1 } = getLocalStorageLength();

  return (
    <div>
      <h1>Dashboard</h1>

      <div>
          <p>Book's length: {localStorageLength}</p>
          <p>Name's length: {localStorageLength1}</p>
        </div>

      <header>
        {children}
      </header>

      <main>


        <nav>
          <ul>
            <button className='button5'>
              <Link to="/home">Home</Link><br></br>
            </button>
          </ul>
        </nav>

        
      </main>
    </div>
  );
};

export default Dashboard;

