import React from 'react';
import { Link } from 'react-router-dom';

class MainNavBar extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
        const loggedIn = () => (
            <nav className="main-nav">
                <button className="logout" onClick={this.props.logout}>Log Out</button>
            </nav>);

        return this.props.currentUser ? loggedIn() : null;
    }
};


export default MainNavBar;


