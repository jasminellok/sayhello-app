import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faAngellist } from '@fortawesome/free-brands-svg-icons';
const user = <FontAwesomeIcon icon={faUser} />
const home = <FontAwesomeIcon icon={faHome} />
const gh = <FontAwesomeIcon icon={faGithub} />
const linkin = <FontAwesomeIcon icon={faLinkedin} />
const alist = <FontAwesomeIcon icon={faAngellist} />


class MainNavBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showProfile: false
        }
        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.showProfile = this.showProfile.bind(this);
    }

    toggleDropdown(field) {
        return e => {
            e.preventDefault();
            e.stopPropagation();
            this.setState({[field]: !this.state[field]}, () => {
                if (this.state[field] === true) { 
                    document.addEventListener('click', this.toggleDropdown);
                } else {
                    document.removeEventListener("click", this.toggleDropdown) 

                }
            });
        }
    }

    showProfile() {
        return (
        <div className="profile-content">
            <span className="accountx">
                <li> </li>
                <li> Account </li>
                <p> x </p>
            </span>
            <span className="profile-info">  
                <div><p></p></div>
                <p className="profile-name">{this.props.currentUser.full_name}</p>
                <p className="profile-email">{this.props.currentUser.email}</p>
                <div><p></p></div>
            </span>
            <span className="profile-logout">
                <div className="logout-cont">
                    <p className="nav-logout" onClick={this.props.logout}>Log Out</p>
                </div>
            </span>
            
        </div>
        )
    }


    render () {
        const mainNav = () => (
            <nav className="main-nav">

                <div className="nav-sides">
                    <Link  to="/boards">
                        <div className="icon">{home}</div>
                    </Link>
                    <a href="https://github.com/jasminellok" target="_blank">
                        <div className="icon">{gh}</div>
                    </a>
                    <a href="https://jasminellok.github.io/" target="_blank">
                        <div className="icon">{user}</div>
                    </a>
                </div>

                <div className="logo-boards">
                    <Link className="logo-board-index" to="/boards">
                        <img src={window.logo} alt="sayHello" className="main-nav-logo" /> 
                    </Link>
                </div>
                
                <div className="nav-sides">
                    <a href="https://www.linkedin.com/in/jasminellok/" target="_blank">
                        <div className="icon">{linkin}</div>
                    </a>
                    <a href="https://angel.co/u/jasminellok" target="_blank">
                        <div className="icon">{alist}</div>
                    </a>
                    <div className="profile-dropdown-btn" onClick={this.toggleDropdown("showProfile")}>
                        <li className="profile-letter">
                            <p>{this.props.currentUser.full_name[0]}</p>
                        </li>
                        {this.state.showProfile ? this.showProfile() : null}                    
                    </div>
                </div>

            </nav>);

        return this.props.currentUser ? mainNav() : null;
    }
};


export default MainNavBar;


