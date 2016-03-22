'use strict';


import alt from '../utils/alt';
import $ from '../bower_components/jquery/dist/jquery.min.js';


// Creating constructor to handle different states
class LoginActions {
  constructor() {
    this.generateActions(
      'loginSuccess',
      'loginFail',
      'noEmail',
      'noPassword'
    );
  }

  // Making Get call to DB to get user info
  loginUser(email, password) {
    $.ajax({
      type: 'POST',
      url: '/api/user/login',
      data: { userEmail: email, userPassword: password }
    }, )
      .done((data) => {
        console.log("data", data);
        console.log("this", this);
        this.actions.loginSuccess(data.message);
      })
      .fail((err) => {
        this.actions.loginFail(err);
      });
  }
}

export default alt.createActions(LoginActions);
