'use strict';


import React from 'react';
import LoginStore from '../stores/LoginStore';
import LoginActions from '../actions/LoginActions';
import {Route, Router, browserHistory, Link} from 'react-router';


// Creating Login to handle actions and store
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = LoginStore.getState();
    this.onChange = this.onChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  // Listening to changes at the store
  componentDidMount() {
    LoginStore.listen(this.onChange);
  }

  // Unlistening to changes at the store
  componentWillUnmount() {
    LoginStore.unlisten(this.onChange);
  }

  // Handling the email value change
  handleEmailChange() {
    this.setState({email: this.refs.email.value});
  }

  // Handling the password value change
  handlePasswordChange() {
    this.setState({password: this.refs.password.value});
  }

  // When change occurs handle state
  onChange(state) {
    this.setState(state);
    if (this.state.loginState) {
      this.props.history.push('/');
      // console.log("this.props", this.props);
    }
  }

  // Handling submit on users info
  handleSubmit(event) {
    event.preventDefault();
    // Email and Password provided by user
    let email = this.state.email;
    let password = this.state.password;

    // If no email provided
    if (!email) {
      LoginActions.noEmail();
      this.refs.nameTextField.getDOMNode().focus();
    }

    // If no password provided
    if (!password) {
      LoginActions.noPassword();
    }

    // Handling login of user
    if (email && password) {
      LoginActions.loginUser(email, password);
    }
  }


  render() {
    return (
        <div className="login-container">
            <form className="form-signin">
                <h2 className="form-signin-heading">Please sign in</h2>
                <label className="sr-only">Email address</label>
                <input type="email" id="inputEmail" ref="email" className="form-control" placeholder="Email address" required autofocus value={this.state.email} onChange={this.handleEmailChange}></input>
                <label className="sr-only">Password</label>
                <input type="password" id="inputPassword" ref="password" className="form-control" placeholder="Password" required value={this.state.password} onChange={this.handlePasswordChange}></input>
                <div className="ui message">New to us? <Link to={'/register'}>Sign Up</Link></div>
                <button className="btn btn-lg btn-primary btn-block" onClick={this.handleSubmit} type="submit">Sign in</button>
            </form>
        </div>
    )
  }
}






export default Login;
