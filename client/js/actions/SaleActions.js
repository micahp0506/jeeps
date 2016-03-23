'use strict';


import alt from '../utils/alt';
import $ from '../bower_components/jquery/dist/jquery.min.js';
import LoginStore from '../stores/LoginStore';


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
  createSale(id, email, name, make, model, year, description, category) {
    $.ajax({
      type: 'POST',
      url: '/api/post/create',
      data: {
        userId: id,
        contactEmail: email,
        contactName: name,
        // category: category,
        make: make,
        model: model,
        year: year,
        description: description,
        category: category
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
