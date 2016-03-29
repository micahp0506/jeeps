'use strict';


import alt from '../utils/alt';
import $ from '../bowerComponents/jquery/dist/jquery.min.js';
import LoginStore from '../stores/LoginStore';


// Creating constructor to handle login action
class SellActions {
  constructor() {
    this.generateActions(
      'saleSuccess',
      'saleFail',
      'noEmail',
      'noName'
    );
  }

  // Sending new add information to DB
  createSell(id, email, name, location, make, model, year, price, description, category, image) {
    console.log("location", location);
    $.ajax({
      type: 'POST',
      url: '/api/post/create',
      data: {
        userId: id,
        contactEmail: email,
        contactName: name,
        location: location,
        make: make,
        model: model,
        year: year,
        price: price,
        description: description,
        category: category,
        image: image
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

export default alt.createActions(SellActions);
