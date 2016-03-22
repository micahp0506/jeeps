'use strict';


import alt from '../utils/alt';
import LoginActions from '../actions/LoginActions';

// Creating register store constructor
class LoginStore {
  constructor() {
    this.bindActions(LoginActions);
    this.email = '';
    this.password = '';
    this.helpBlock = '';
    this.emailValidationState = '';
    this.passwordValidationState = '';
    this.loginState = false;
  }

  // Handling the registration of new user
  onLoginSuccess(successMessage) {
    console.log("store this", this);
    console.log("user logged in");
    this.emailValidationState = 'has-success';
    this.helpBlock = successMessage;
    this.loginState = true;
  }

  // Handling the failure to register of new user
  onLoginFail(errorMessage) {
    console.log("error", errorMessage);
    this.emailValidationState = 'has-error';
    this.helpBlock = errorMessage;
    console.log("Email or password is not correct. Please try again.");
  }

  // Handling no email provided by user
  onnoEmail() {
    this.emailValidationState = 'has-error';
    this.helpBlock = 'Please enter an email.';
  }

  // Handling no password provided by user
  onnoPassword() {
    this.passwordValidationState = 'has-error';
    this.helpBlock = 'Please enter a password';
  }


}

export default alt.createStore(LoginStore);
