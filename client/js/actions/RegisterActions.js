'use strict';


import alt from '../utils/alt';
import {Router, browserHistory} from "react-router";
import $ from '../bowerComponents/jquery/dist/jquery.min.js';


// Creating constructor to handle different states
class RegisterActions {
  constructor() {
    this.generateActions(
      'registerSuccess',
      'registerFail',
      'noEmail',
      'noPassword',
      'doesNotMatch'
    );
  }

  // Making POST call to DB to add new user info
  addUser(email, password) {
    $.ajax({
      type: 'POST',
      url: '/api/user/create',
      data: { userEmail: email, userPassword: password }
    })
    .done((data) => {
        this.actions.registerSuccess(data.message);
    })
    .fail((err) => {
        this.actions.registerFail(err);
    });
  }
}

export default alt.createActions(RegisterActions);



