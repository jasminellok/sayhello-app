import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

//  |home|BONUS:index dropdown/link|           |logo|          |BONUS:create modal|profile dropdown|
const home = <FontAwesomeIcon icon={faHome} />


class MainNavBar extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
        const mainNav = () => (
            <nav className="main-nav">

                <div className="nav-home-btn">
                    <Link className="home-icon" to="/boards">
                        <div>{home}</div>
                    </Link>
                </div>

                {/* <div className="nav-board-index"> Boards
                    <p>Recent Boards</p>
                </div> */}

                <div className="go-to-boards">
                    <Link className="logo-board-index" to="/boards">
                        <img src={window.logo} alt="sayHello" className="nav-logo" /> 
                    </Link>
                </div>

                <ul className="profile-links"> {this.props.currentUser.full_name[0]}
                    <li className="profile-info">Account
                        <p className="profile-name">{this.props.currentUser.full_name}</p>
                        <p className="profile-email">{this.props.currentUser.email}</p>
                    </li>
                    <li className="logout" onClick={this.props.logout}>Log Out</li>
                </ul>

            </nav>);

        return this.props.currentUser ? mainNav() : null;
    }
};


export default MainNavBar;


