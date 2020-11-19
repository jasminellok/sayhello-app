import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component{
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        //console.log(this.props.login)
        const user = { email: "demouser@example.com", password: "demouser" }
        this.props.login(user)
    }
    
    render () {
        const user = () => (<body id="splash-page">
            <nav className="splash-nav">
                <div >
                    <Link to="/" className="go-to-splash">
                        <img src={window.logo} alt="sayHello" className="nav-logo" />
                        <p>Sayhello</p>
                    </Link>
                </div>

                <div className="session-links">
                    <Link to="/login">Log in</Link>
                    <Link to="/signup">Sign up</Link>
                    <button onClick={this.handleSubmit}>Demo</button>
                </div>
            </nav>

            <section className="splash-welcome">
                <div className="splash-text">
                    <h1 className="splash-title"> Say hello to your buddies and get work done together.</h1>
                    <p className="splash-content"> Use our organizational boards, lists, and cards to finish work with your team like champs! Try out our demo for more information.</p>
                </div>
                <div className="splash-img" ><img src={window.splash} alt="sayHello" /></div>
            </section>

        </body>);

        return user();
    }
};


export default Splash;

