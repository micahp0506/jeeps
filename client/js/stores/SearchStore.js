'use strict';


import alt from '../utils/alt';
import SearchActions from '../actions/SearchActions';

// Creating search store constructor
class SearchStore {
  constructor() {
    this.bindActions(SearchActions);
    this.searchState = false;
    this.searchResults = null;
  }

 // Handling successful search
  onGetShit(results) {
    this.searchState = true;
    this.searchResults = results;
    console.log("results", results);
    console.log("Search Success");
  }

// Handling the unsuccessful search
  onGetFail(err) {
    console.log("Something went wrong. Please try again.");
  }
}

export default alt.createStore(SearchStore);

