'use strict';


import alt from '../utils/alt';
import MyPostsActions from '../actions/MyPostsActions';

// Creating search store constructor
class MyPostsStore {
  constructor() {
    this.bindActions(MyPostsActions);
    this.searchState = false;
    this.searchResults = null;
    this.deletionMessage = null;
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

  // Handling successful deletion of post
  onDeleteSuccess() {
    this.deletionMessage = 'Deletion successful.'
  }

  // Handling the unsuccessful deletion of post
  onDeleteFail() {
    this.deletionMessage = 'Deletion failed, please try again.'
  }
}

export default alt.createStore(MyPostsStore);
