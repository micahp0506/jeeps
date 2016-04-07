'use strict';


import alt from '../utils/alt';
import $ from '../bowerComponents/jquery/dist/jquery.min.js';


// Creating constructor to handle the users action
class MyPostsActions {
  constructor() {
    this.generateActions(
      'myPostsSuccess',
      'myPostsFail',
      'deleteSuccess',
      'deleteFail',
      'editSuccess',
      'editFail'
    );
  }

  getMyPosts(id) {
    fetch(`/api/myposts/${id}`)
    .then((response) => {
        return response.json()
    })
    .then((results) => {
        console.log("results", results);
        console.log("this", this);
        this.actions.myPostsSuccess(results);
    })
    .catch((err) => {
        this.actions.myPostsFail(err);
    });
  }

  deletePost(id) {
    $.ajax({
        type: 'DELETE',
        url: `/api/myposts/delete/${id}`,
  })
    .done((res) => {
      console.log("posts action id", id);
        this.actions.deleteSuccess(id);
      })
    .fail((err) => {
        this.actions.deleteFail(err);
    });
  }

  editPost(id) {
    console.log("id", id);
    console.log("actions edit");
  }
}

export default alt.createActions(MyPostsActions);
