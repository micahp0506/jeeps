'use strict';


import alt from '../utils/alt';
import $ from '../bower_components/jquery/dist/jquery.min.js';


// Creating constructor to handle search action
class SearchActions {
  constructor() {
    this.generateActions(
      'getShit',
      'getFail'
    );
  }

  // Sending new add information to DB
  getPost() {
    fetch('/api/search/all')
      .then((response) => {
        return response.json()
      })
      .then((results) => {
        this.actions.getShit(results);
      })
      .catch((err) => {
        this.actions.getFail(err);
      });
  }
}

export default alt.createActions(SearchActions);
