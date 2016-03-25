'use strict';


import alt from '../utils/alt';
import $ from '../bower_components/jquery/dist/jquery.min.js';


// Creating constructor to handle login action
class LoginActions {
  constructor() {
    this.generateActions(
      'loginSuccess',
      'logoutSuccess',
      'loginFail',
      'noEmail',
      'noPassword',
      'getUserId'
    );
  }

  // Making Get call to DB to get user info
  loginUser(email, password) {
    $.ajax({
      type: 'POST',
      url: '/api/user/login',
      data: { userEmail: email, userPassword: password }
    })
      .done((data) => {
        this.actions.loginSuccess(data);
      })
      .fail((err) => {
        this.actions.loginFail(err);
      });
  }

  logoutUser(cb) {
    console.log("logout in");
    this.actions.logoutSuccess(cb);
  }
}

export default alt.createActions(LoginActions);
