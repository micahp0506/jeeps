'use strict';


import alt from '../utils/alt';
import SaleActions from '../actions/SaleActions';

// Creating sale store constructor
class SaleStore {
  constructor() {
    this.bindActions(SaleActions);
    this.email = '';
    this.name = '';
    this.helpBlock = '';
    this.emailValidationState = '';
    this.nameValidationState = '';
    this.saleState = false;
  }

  // Handling the posting of a new add
  onSaleSuccess(successMessage) {
    console.log("Store Added new post");
    this.emailValidationState = 'has-success';
    this.helpBlock = successMessage;
    this.saleState = true;
  }

  // Handling the failure to post of a new add
  onSaleFail(errorMessage) {
    console.log("error", errorMessage);
    this.emailValidationState = 'has-error';
    this.helpBlock = errorMessage;
    console.log("Something went wrong. Please try again.");
  }

  // Handling no email provided by user
  onNoEmail() {
    this.emailValidationState = 'has-error';
    this.helpBlock = 'Please enter an email.';
  }

  // Handling no password provided by user
  onNoName() {
    this.passwordValidationState = 'has-error';
    this.helpBlock = 'Please enter your name';
  }


}

export default alt.createStore(SaleStore);
