import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
    const links = () => (
        <section className="login-sign-up">
            <Link to="/login">Login</Link>
            <br/>
            <Link to="/signup">Sign up!</Link>
        </section>
    );
    const welcome = () => (
        <section className="welcome">
            <h3> sayHello to {currentUser.full_name}!</h3>
            <button className="logout" onClick={logout}>Log Out</button>
        </section>
    );

    return currentUser ? welcome() : links();
};


export default Greeting;


