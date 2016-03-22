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
      // this.setState({email: '', password: ''});
      // this._reactInternalInstance._context.history.push('/');
    }
  }


  render() {
    return (
        <div className="ui middle aligned center aligned grid">
            <div className="column">
                <h2 className="ui black image header">
                    <div className="content">
                        Log-in to your account
                    </div>
                </h2>
                <form className="ui large form">
                    <div className="ui stacked segment">
                        <div className="field">
                            <div className="ui left icon input">
                                <i className="user icon"></i>
                                <input type="text" name="email" ref="email"value={this.state.email} onChange={this.handleEmailChange}placeholder="E-mail address">
                                </input>
                            </div>
                        </div>
                        <div className="field">
                            <div className="ui left icon input">
                                <i className="lock icon"></i>
                                <input type="password" name="password" ref="password" value={this.state.password} onChange={this.handlePasswordChange}placeholder="Password">
                                </input>
                            </div>
                        </div>
                        <button className="ui fluid large black submit button" onClick={this.handleSubmit}>Login</button>
                    </div>
                    <div className="ui error message"></div>
                </form>
            <div className="ui message">
                New to us? <Link to={'/register'}>Sign Up</Link>
            </div>
        </div>
    </div>
    )
  }
}


export default Login;
