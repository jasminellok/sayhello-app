import React from 'react';
import { Link } from 'react-router-dom';

const Splash = ({ currentUser, logout }) => {
    const welcome = () => (
        <h4>say Hello to your buddies and get work done!</h4>
    );

    const user = () => (
            <h3> sayHello to {currentUser.full_name}!</h3>
            );

    return currentUser ? user() : welcome();
};


export default Splash;