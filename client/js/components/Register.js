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
    this.setState(state);
  }

  // Handling submit on users info
  handleSubmit(event) {
    // Email and Password provided by user
    let email = this.refs.email.value;
    let password = this.refs.password.value;
    let confirmPassword = this.refs.confirmPassword.value;

    // If no email provided
    if (!email) {
      RegisterActions.noEmail();
      this.refs.nameTextField.getDOMNode().focus();
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
      this.setState({email: '', password: '', confirmPassword: ''});
      this._reactInternalInstance._context.history.push('/');
    }
  }

  // Rendering HTML
  render() {
    return (
        <div className="ui middle aligned center aligned grid">
            <div className="column">
                <h2 className="ui black image header">
                    <div className="content">
                        Register as a New User
                    </div>
                </h2>
                <form className="ui large form">
                    <div className="ui stacked segment">
                        <div className="field">
                            <div className="ui left icon input">
                                <i className="user icon"></i>
                                <input type="text" ref="email" name="email" value={this.state.email} onChange={this.handleEmailChange} placeholder="E-mail address">
                                </input>
                            </div>
                        </div>
                        <div className="field">
                            <div className="ui left icon input">
                                <i className="lock icon"></i>
                                <input type="password" ref="password" name="password" value={this.state.password} onChange={this.handlePasswordChange} placeholder="Password">
                                </input>
                            </div>
                        </div>
                        <div className="field">
                            <div className="ui left icon input">
                                <i className="lock icon"></i>
                                <input type="password" ref="confirmPassword" name="confirmPassword" value={this.state.confirmPassword} onChange={this.handleConfirmPasswordChange} placeholder="Confirm Password">
                                </input>
                            </div>
                        </div>
                        <div className="ui fluid large black submit button" onClick={this.handleSubmit}>Register & Log In</div>
                    </div>
                    <div className="ui error message"></div>
                </form>
            </div>
        </div>
    )
  }
}


export default Register;
