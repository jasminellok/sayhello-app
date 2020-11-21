import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      full_name: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  handleChange(field) {
    return (e) => this.setState({[field]: e.currentTarget.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = {...this.state}
    this.props.processForm(user)
  }

  showErrors() {
    const liErrors = this.props.errors.map((error,i) => {
      return (<li key={`session-errors${i}`}>{error}</li>)
    })
    return (
      <ul className="session-errors">{liErrors}</ul>
    );
  }

  render() {
    const isSignup = this.props.formType ==='Sign Up'
    const fullName = () => {
      return (<>
        <label className="session-name">
          <input type="text"
            value={this.state.full_name}
            onChange={this.handleChange('full_name')}
            placeholder="Enter Your Full Name"
          />
        </label>
        <br/>
      </>)
    };
    const signupLink = () => {
      return(<Link to="/signup">Can't log in?  •  Sign up for an account</Link>)
    }

    const signinLink = () => {
      return (<Link to="/login">Already have an account? Log In</Link>)
    }

    return (
      <div className="session-page">

        <form onSubmit={this.handleSubmit} className="session-form">
              <div className="session-logo">
                <Link to="/" className="go-to-splash">
                  <img src={window.logo} alt="sayHello" />
                </Link>
              </div>

            <section className="session-inputs">
                  {this.showErrors()}
                  <br/>
                  <h3>{isSignup ? "Sign up for Sayhello" : "Log in to Sayhello"}</h3>
                    <br/>
                  <label className="session-email">
                    <input type="text"
                      value={this.state.email}
                      onChange={this.handleChange('email')}
                      placeholder="Enter Your Email"
                    />
                  </label>
                    <br />
                  {isSignup ? fullName() : null}
                  <label className="session-pw">
                    <input type="password"
                      value={this.state.password}
                      onChange={this.handleChange('password')}
                      placeholder="Enter Your Password"
                    />
                  </label>
                    <br />
                  <label id="session-submit">
                    <button type="submit" >{this.props.formType}</button>
                  </label>
                  <br/>

                  <label className="alt-link">
                    {isSignup ? signinLink() : signupLink() }
                  </label>
              </section>
        </form>

        <div className="session-foot-img">
          <img src={window.session} alt="sayHello"  />
        </div>

      </div>
    );
  }
}

export default SessionForm;

