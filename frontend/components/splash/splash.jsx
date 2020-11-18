import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component{
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.props.login)
        const user = { email: "demouser@example.com", password: "demouser" }
        this.props.login(user)
    }
    
    render () {
        const user = () => (
            <div>
            <nav className="session-links">
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign up!</Link>
                <button onClick={this.handleSubmit}>Demo it out!</button>
            </nav>

            <section className="splash-welcome">
                <h3> sayHello to your buddies and work together to get it done!</h3>
            </section>
            </div>
        );

        return user();
    }
};


export default Splash;

