
import React from 'react';
import './Layout.css';

const Layout = ({ children }) => {
    return (
        <div className='layout'>
            <header>
                {children}
            </header>
           
        </div>
    );
};

export default Layout;
