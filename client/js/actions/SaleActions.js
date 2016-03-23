'use strict';


import alt from '../utils/alt';
import $ from '../bower_components/jquery/dist/jquery.min.js';


// Creating constructor to handle different sale of vehicle
class SaleActions {
  constructor() {
    this.generateActions(
      'saleSuccess',
      'saleFail',
      'noEmail',
      'noName'
    );
  }

  // Making Get call to DB to get user info
  createSale(email, name, make, model, year, description) {
    console.log(email, name, make, model, year, description);
    $.ajax({
      type: 'POST',
      url: '/api/post/create',
      data: {
        contactEmail: email,
        contactName: name,
        // category: category,
        make: make,
        model: model,
        year: year,
        description: description
      }
    })
      .done((data) => {
        this.actions.saleSuccess(data.message);
      })
      .fail((err) => {
        this.actions.saleFail(err);
      });
  }
}

export default alt.createActions(SaleActions);
