import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';


const Home = () => {

    return (

        <div>
            <h1>Home</h1>

            <main>
                <nav>
                    <ul>
                    <button className='button2'>
                    <li><Link to="/username">Names</Link></li>
                    </button>
                    <button className='button2'>
                    <li><Link to="/bookname">Book</Link></li>
                    </button><br></br><br></br>
                    <button className='button1'>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    </button><br></br><br></br>
                    <button className='button'>
                    <li><Link to="/name">Add Name</Link></li>
                    </button>
                    <button className='button'>
                    <li><Link to="/book">Add Book</Link></li>
                    </button>
                    </ul>
                </nav>
            </main>
        </div>
    );
};

export default Home;