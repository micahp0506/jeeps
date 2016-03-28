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
    this.postMessage = null;
  }

  // Handling successful search
  onMyPostsSuccess(results) {
    console.log("this", this);
    console.log("results", results);
    this.searchState = true;
    this.searchResults = results;
    this.postMessage = 'New listing added.'
  }

  // Handling the unsuccessful search
  onMyPostsFail(err) {
    this.postMessage = 'Listing not added. Please try again.';
  }

  // Handling successful deletion of post
  onDeleteSuccess(id) {
    let newId = parseInt(id);
    this.searchResults = this.searchResults.filter((r) => {
      return r.postId !== newId });
    this.deletionMessage = 'Listing Deleted.'
  }

  // Handling the unsuccessful deletion of post
  onDeleteFail() {
    this.deletionMessage = 'Deletion failed. Please try again.'
  }
}

export default alt.createStore(MyPostsStore);
