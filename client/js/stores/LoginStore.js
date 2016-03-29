'use strict';


import alt from '../utils/alt';
import LoginActions from '../actions/LoginActions';


// Creating register store constructor
class LoginStore {
  constructor() {
    this.bindActions(LoginActions);
    this.email = '';
    this.userId = '';
    this.helpBlock = '';
    this.emailValidationState = '';
    this.passwordValidationState = '';
    this.loginState = false;
    this.loginMessage = null;
    this.noEmailMessage = null;
    this.noPasswordMessage = null;
  }

  // Handling the login of new user
  onLoginSuccess(data) {
    this.emailValidationState = 'has-success';
    this.helpBlock = data;
    this.email = data.userEmail;
    this.userId = data.userId;
    this.loginState = true;
    this.loginMessage = 'Login successful.';
    toastr.success(this.loginMessage);
  }

  // Handling the failure to login of new user
  onLoginFail(errorMessage) {
    this.emailValidationState = 'has-error';
    this.helpBlock = errorMessage;
    this.loginMessage = 'Email or password is not correct. Please try again.';
    toastr.error(this.loginMessage);
  }

  // Handling no email provided by user
  onnoEmail() {
    this.emailValidationState = 'has-error';
    this.noEmailMessage = 'Please enter an email.';
    toastr.error(this.noEmailMessage);
  }

  // Handling no password provided by user
  onnoPassword() {
    this.passwordValidationState = 'has-error';
    this.noPasswordMessage = 'Please enter a password.';
    toastr.error(this.noPasswordMessage);
  }

}

export default alt.createStore(LoginStore);
