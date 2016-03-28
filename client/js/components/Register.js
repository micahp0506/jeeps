'use strict';


import React from 'react';
import { browserHistory } from 'react-router'
import RegisterStore from '../stores/RegisterStore';
import RegisterActions from '../actions/RegisterActions';


// Creating Register to handle actions and store
class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = RegisterStore.getState();
    console.log("this.state", this.state);
    this.onChange = this.onChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  // Listening to changes at the store
  componentDidMount() {
    RegisterStore.listen(this.onChange);
  }

  // Unlistening to changes at the store
  componentWillUnmount() {
    RegisterStore.unlisten(this.onChange);
  }

  // Handling the email value change
  handleEmailChange() {
    this.setState({email: this.refs.email.value});
  }

  // Handling the password value change
  handlePasswordChange() {
    this.setState({password: this.refs.password.value});
  }

  // Handling the confirm password value change
  handleConfirmPasswordChange() {
    this.setState({confirmPassword: this.refs.confirmPassword.value});
  }

  // When change occurs handle state
  onChange(state) {
    console.log("cstate", state);
    this.setState(state);
    if (this.state.registerState) {
      this.props.history.push('/');
    }
  }

  // Handling submit on users info
  handleSubmit(event) {
    event.preventDefault();
    // Email and Password provided by user
    let email = this.state.email;
    let password = this.state.password;
    let confirmPassword = this.state.confirmPassword;

    // If no email provided
    if (!email) {
      RegisterActions.noEmail();
    }

    // If no password provided
    if (!password) {
      RegisterActions.noPassword();
    }

    // If passwords do not match
    if (password !== confirmPassword) {
      RegisterActions.doesNotMatch();
    }

    // Handling registration of new user
    if (email && password) {
      RegisterActions.addUser(email, password);
    }
  }

  // Rendering HTML
  render() {
    return (
        <div className="login-container">
            <form className="form-signin">
                <h2 className="form-signin-heading header">REGISTER</h2>
                <label className="sr-only">Email Address</label>
                <input type="email" id="inputEmail" ref="email" className="form-control" placeholder="Email Address" required autofocus value={this.state.email} onChange={this.handleEmailChange}></input>
                <label className="sr-only">Password</label>
                <input type="password" id="inputPassword" ref="password" className="form-control" placeholder="Password" required value={this.state.password} onChange={this.handlePasswordChange}></input>
                <input type="password" id="inputPassword" ref="confirmPassword" className="form-control" placeholder="Confirm Password" required value={this.state.confirmPassword} onChange={this.handleConfirmPasswordChange}></input>
                <button className="btn btn-lg btn-primary btn-block" onClick={this.handleSubmit} type="submit">Sign in</button>
            </form>
        </div>
    )
  }
}


export default Register;
