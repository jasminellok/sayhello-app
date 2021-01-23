import React from 'react';
import { Link } from 'react-router-dom';


class Splash extends React.Component{
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = { email: "demouser@example.com", password: "demouser" }
        this.props.login(user)
    }
    
    render () {
        return (<div id="splash-page">
            <nav className="splash-nav">
                <div >
                    <Link to="/" className="go-to-splash">
                        <img src={window.logo} alt="sayHello" className="splash-logo" />
                        <p>Sayhello</p>
                    </Link>
                </div>

                <div className="session-links">
                    <Link to="/login">Log in</Link>
                    <Link to="/signup">Sign up</Link>
                    <button type="submit" onClick={this.handleSubmit}>Demo</button>
                </div>
            </nav>

            <section className="splash-content">
                <div className="splash-welcome">
                    <div className="splash-text">
                        <h1 className="splash-title"> Say hello to your buddies and get work done together.</h1>
                        <p className="splash-content"> Use our organizational boards, lists, and cards to finish work with your team like champs! Try out our demo for more information.</p>
                    </div>
                    <div className="splash-img" ><img src={window.splash} alt="sayHello" /></div>
                </div>
            </section>

            <section className="splash-footer">
                <a href="https://github.com/jasminellok" target="_blank">
                    <div className="p-site">Github</div> 
                </a>
                <a href="https://jasminellok.github.io/" target="_blank">
                    <div className="p-site" >Personal Site</div> 
                </a>
                    <a href="https://www.linkedin.com/in/jasminellok/" target="_blank">
                    <div className="p-site">Linkedin</div> 
                </a>
                <a href="https://angel.co/u/jasminellok" target="_blank">
                    <div className="p-site">AngelList</div> 
                </a>
            </section>

        </div>);
    }
};


export default Splash;

