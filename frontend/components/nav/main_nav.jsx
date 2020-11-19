import React from 'react';
import { Link } from 'react-router-dom';

class MainNavBar extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
        const loggedIn = () => (
            <nav className="main-nav">
                <div className="go-to-boards">
                    <Link className="logo-board-index" to="/boards">
                        <img src={window.logo} alt="sayHello" className="nav-logo" /> say hello
                    </Link>
                </div>

                <div className="main-links">
                    <button className="logout" onClick={this.props.logout}>Log Out</button>
                </div>
            </nav>);

        return this.props.currentUser ? loggedIn() : null;
    }
};


export default MainNavBar;


