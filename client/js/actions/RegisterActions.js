'use strict';


import alt from '../utils/alt';
import {browserHistory} from "react-router";
import $ from '../bower_components/jquery/dist/jquery.min.js';


// Creating constructor to handle different states
class RegisterActions {
  constructor() {
    this.generateActions(
      'registerSuccess',
      'registerFail',
      'newEmail',
      'newPassword',
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
        console.log("data", data);
        console.log("this", this);
        this.registerSuccess(data.message);
      })
      .fail((jqXhr) => {
        this.registerFail(jqXhr.responseJSON.message);
      });
  }
}

export default alt.createActions(RegisterActions);



