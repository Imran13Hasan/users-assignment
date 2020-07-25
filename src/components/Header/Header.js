import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className="header-container">
                <h1>Users Information System</h1>
            </div>
            <nav className="nav-container">
                <a href="/users">Users</a>
                <a href="/contact">Contact</a>
                <a href="/about">About</a>
            </nav>
        </div>
    );
};

export default Header;