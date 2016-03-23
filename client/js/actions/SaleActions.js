'use strict';


import alt from '../utils/alt';
import $ from '../bower_components/jquery/dist/jquery.min.js';


// Creating constructor to handle different sale of vehicle
class SaleActions {
  constructor() {
    this.generateActions(
      'loginSuccess',
      'loginFail',
      'noEmail',
      'noPassword'
    );
  }

  // Making Get call to DB to get user info
  createSale(email, name, category, make, model, image, description) {
    $.ajax({
      type: 'POST',
      url: '/api/sale/create',
      data: {
        contactEmail: email,
        contactName: name,
        category: category,
        make: make,
        model: model,
        image: image,
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
