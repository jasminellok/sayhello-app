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
      <ul>{liErrors}</ul>
    );
  }

  render() {
    const isSignup = this.props.formType ==='Sign Up'
    const fullName = () => {
      return (<>
        <label> Full Name:
          <input type="text"
            value={this.state.full_name}
            onChange={this.handleChange('full_name')}
          />
        </label>
        <br/>
      </>)
    };
    const signupLink = () => {
      return(<div>
        <Link to="/signup">Can't log in? • Sign up!</Link>
      </div>)
    }

    const signinLink = () => {
      return (<div>
        <Link to="/login">Already have an account? Log In</Link>
      </div>)
    }
    return (<div>
        <form onSubmit={this.handleSubmit} className="session-form">
          <h3>{this.props.formType}</h3>
          {this.showErrors()}

            <br/>
          <label>Email:
            <input type="text"
              value={this.state.email}
              onChange={this.handleChange('email')}
            />
          </label>

            <br />
          {isSignup ? fullName() : null}

          <label>Password:
            <input type="password"
              value={this.state.password}
              onChange={this.handleChange('password')}
            />
          </label>
            <br />
          <button type="submit">Submit</button>
        </form>

        {isSignup ? signinLink() : signupLink() }
        
    </div>);
  }
}

export default SessionForm;

