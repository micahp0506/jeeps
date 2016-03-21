'use strict';


import alt from '../utils/alt';
import {Router, browserHistory} from "react-router";
const createBrowserHistory = require('history/lib/createBrowserHistory');
let history = createBrowserHistory();
import $ from '../bower_components/jquery/dist/jquery.min.js';


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
        console.log("data", data);
        console.log("this", this);
        console.log("history", history);
        // history.pushState('/');

        this.actions.registerSuccess(data.message);
      })
      .fail((err) => {
        console.log(err);
        this.actions.registerFail(err);
      });
  }
}

export default alt.createActions(RegisterActions);



