'use strict';


import alt from '../utils/alt';
import $ from '../bower_components/jquery/dist/jquery.min.js';


// Creating constructor to handle search action
class SearchActions {
  constructor() {
    this.generateActions(
      'searchSuccess',
      'searchFail',
      'setSearchState'
    );
  }

  // Sending new add information to DB
  getPost(category) {
    console.log("category search actions", category);
    fetch(`/api/search/${category}`)
      .then((response) => {
        return response.json()
      })
      .then((results) => {
        this.actions.searchSuccess(results);
      })
      .catch((err) => {
        this.actions.searchFail(err);
      });
  }
}

export default alt.createActions(SearchActions);
