'use strict';


import alt from '../utils/alt';
import MyPostsActions from '../actions/MyPostsActions';

// Creating search store constructor
class MyPostsStore {
  constructor() {
    this.bindActions(MyPostsActions);
    this.searchState = false;
    this.searchResults = null;
  }

 // Handling successful search
  onMyPostsSuccess(results) {
    console.log("this", this);
    console.log("results", results);
    this.searchState = true;
    this.searchResults = results;
  }

// Handling the unsuccessful search
  onMyPostsFail(err) {
    console.log("Something went wrong. Please try again.");
  }
}

export default alt.createStore(MyPostsStore);
