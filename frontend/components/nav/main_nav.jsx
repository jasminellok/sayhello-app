import React from 'react';
import { Link } from 'react-router-dom';

const MainNavBar = ({ currentUser, logout }) => {
    const links = () => ( 
        <nav className="session-links">
            <Link to="/login">Login</Link>
            <br/>
            <Link to="/signup">Sign up!</Link>
        </nav>);

    const welcome = () => (
        <nav className="logout-button">
            <button className="logout" onClick={logout}>Log Out</button>
        </nav>);

    return currentUser ? welcome() : links();
};


export default MainNavBar;


