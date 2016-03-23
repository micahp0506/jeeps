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
  }

  // Handling the registration of new user
  onLoginSuccess(data) {
    console.log("data", data);
    console.log("user logged in");
    this.emailValidationState = 'has-success';
    this.helpBlock = data;
    this.email = data.userEmail;
    this.userId = data.userId;
    console.log("this.userId", this.userId);
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
