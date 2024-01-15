import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = ({ children }) => {
    return (
        <div>
            <h1>Dashboard</h1>

            <header>
                {children}
            </header>
             
             <main>
                <nav>
                    <ul>
                   <Link to="/home">Home</Link><br></br>

                    
                    </ul>
                </nav>
             </main>
    
        </div>
    );
};



export default Dashboard;