'use strict';


import alt from '../utils/alt';
import RegisterActions from '../actions/RegisterActions';


// Creating register store constructor
class RegisterStore {
  constructor() {
    this.bindActions(RegisterActions);
    this.email = '';
    this.password = '';
    this.helpBlock = '';
    this.emailValidationState = '';
    this.passwordValidationState = '';
    this.registerState = false;
    this.loginState = false;
    this.registerMessage = null;
    this.noEmailMessge = null;
    this.noPasswordMessage = null;
    this.passwordDoesNotMatchMessage = null;
  }

  // Handling the successful login of new user
  onRegisterSuccess(successMessage) {
    this.emailValidationState = 'has-success';
    this.helpBlock = successMessage;
    this.registerState = true;
    this.loginState = true;
    this.registerMessage = 'New user added.';
    toastr.success(this.registerMessage);
  }

  // Handling the failure to login of new user
  onRegisterFail(errorMessage) {
    console.log("error", errorMessage);
    this.emailValidationState = 'has-error';
    this.helpBlock = errorMessage;
    this.registerMessage = 'Email or password is not correct. Please try again.';
    toastr.error(this.registerMessage);
  }

  // Binding provided email
  onupdateEmail(event) {
    this.email = event.target.value;
    this.emailValidationState = '';
  }

 // Binding provided hashed password
  onupdatePassword(event) {
    this.password = event.target.value;
    this.passwordValidationState = '';
  }

  // Binding provided hashed password
  onupdateConfirmPassword(event) {
    this.password = event.target.value;
    this.passwordValidationState = '';
  }

  // Handling no email provided by user
  onnoEmail() {
    this.emailValidationState = 'has-error';
    toastr.error(this.noEmailMessage);
    this.noEmailMessge = 'Please enter an email.';
  }

  // Handling no password provided by user
  onnoPassword() {
    this.passwordValidationState = 'has-error';
    toastr.error(this.noPasswordMessage);
    this.noPasswordMessage = 'Please enter a password';
  }

   // Handling the passwords not matching
  ondoesNotMatch() {
    this.passwordValidationState = 'has-error';
    toastr.error(this.passwordDoesNotMatchMessage);
    this.passwordDoesNotMatchMessage = 'Passwords do not match.';
  }

}

export default alt.createStore(RegisterStore);
