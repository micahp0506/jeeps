'use strict';


import alt from '../utils/alt';
import SellActions from '../actions/SellActions';


// Creating sale store constructor
class SellStore {
  constructor() {
    this.bindActions(SellActions);
    this.email = '';
    this.name = '';
    this.helpBlock = '';
    this.emailValidationState = '';
    this.nameValidationState = '';
    this.saleState = false;
    this.saleMessage = null;
    this.noEmailMessage = null;
    this.noNameMessage = null;
  }

  // Handling the posting of a new add
  onSaleSuccess(successMessage) {
    console.log("Store Added new post");
    this.emailValidationState = 'has-success';
    this.helpBlock = successMessage;
    this.saleState = true;
    this.saleMessage = 'New listing added.'
    toastr.success(this.saleMessage);
  }

  // Handling the failure to post of a new add
  onSaleFail(errorMessage) {
    this.emailValidationState = 'has-error';
    this.helpBlock = errorMessage;
    this.saleMessage ="Something went wrong. Please try again.";
    toastr.errror(this.saleMessage);
  }

  // Handling no email provided by user
  onNoEmail() {
    this.emailValidationState = 'has-error';
    this.noEmailMessage = 'Please enter an email.';
    toastr.errror(this.noEmailMessage);
  }

  // Handling no password provided by user
  onNoName() {
    this.passwordValidationState = 'has-error';
    this.noNameMessage = 'Please enter your name';
    toastr.errror(this.noNameMessage);

  }


}

export default alt.createStore(SellStore);
