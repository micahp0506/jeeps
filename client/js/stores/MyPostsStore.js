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
    this.deletionMessage = 'Listing deleted.'
    toastr.success(this.deletionMessage);
  }

  // Handling the unsuccessful deletion of post
  onDeleteFail() {
    this.deletionMessage = 'Deletion failed. Please try again.'
    toastr.error(this.deletionMessage);
  }

  // Handling chosen post to edit success
  onChosenPostSuccess(res) {
    console.log("res", res);
  }

  // handling chosen post to edit failure
  onChosenPostFail() {
    console.log("failed!");
  }
}

export default alt.createStore(MyPostsStore);
