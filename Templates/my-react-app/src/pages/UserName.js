import React from 'react';
import { Link } from 'react-router-dom';

const UserName = () => {
  const nameList = JSON.parse(localStorage.getItem('nameList')) || [];

  const limitedNameList = nameList.slice(0, 5); 

  return (
    <div>
      <h1>UserName</h1>

      {limitedNameList.length > 0 ? (
        <div>
          <ul>
            {limitedNameList.map((name, index) => (
              <li key={index}>{name}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p></p>
      )}

          <main>
        <nav>
          <ul>
            <Link to="/bookname">BookName</Link><br></br>
            <Link to="/home">Home</Link><br></br>
          </ul>
        </nav>
      </main>

        </div>
      )}
    
  
export default UserName;
