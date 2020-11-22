import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
const home = <FontAwesomeIcon icon={faHome} />
//  |home|BONUS:index dropdown/link|           |logo|          |BONUS:create modal|profile dropdown|

// const handleEditDropDown = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     const editDropDown = e.currentTarget.lastElementChild;
//     if (editDropDown.style.display === 'none') {
//         editDropDown.style.display = "block"
//     } else {
//         editDropDown.style.display = "none"
//     };

//     return document.addEventListener("click", (evt) => {
//         console.log(evt)
//         if (evt.currentTarget !== editDropDown.target) {
//             editDropDown.style.display = 'none'
//         }
//     });
// }


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
        <div className="profile-links">
            <span className="accountx">
                <li> </li>
                <li> Account </li>
                <p> x </p>
            </span>
            <li className="profile-info">  
                <p className="profile-name">{this.props.currentUser.full_name}</p>
                <p className="profile-email">{this.props.currentUser.email}</p>
            </li>
            <p className="nav-logout" onClick={this.props.logout}>Log Out</p>
        </div>
        )
    }


    render () {
        const mainNav = () => (
            <nav className="main-nav">

                <div className="nav-home-btn">
                    <Link  to="/boards">
                        <div className="home-icon">{home}</div>
                    </Link>
                </div>

                <div className="logo-boards">
                    <Link className="logo-board-index" to="/boards">
                        <img src={window.logo} alt="sayHello" className="nav-logo" /> 
                    </Link>
                </div>

                <div className="profile-dropdown-btn" onClick={this.toggleDropdown("showProfile")}>
                    <li className="profile-letter">
                        <p>{this.props.currentUser.full_name[0]}</p>
                    </li>
                    {this.state.showProfile ? this.showProfile() : null}                    
                </div>

            </nav>);

        return this.props.currentUser ? mainNav() : null;
    }
};


export default MainNavBar;


