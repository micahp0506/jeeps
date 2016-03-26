'use strict';


import alt from '../utils/alt';
import $ from '../bower_components/jquery/dist/jquery.min.js';


// Creating constructor to handle the users action
class MyPostsActions {
  constructor() {
    this.generateActions(
      'myPostsSuccess',
      'myPostsFail',
      'deleteSuccess',
      'deleteFail'
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
    console.log("actions delete");
    console.log("id", id);
    $.ajax({
        type: 'DELETE',
        url: `/api/myposts/delete/${id}`,
  })
    .done((res) => {
        this.actions.deleteSuccess(res);
      })
    .fail((err) => {
        this.actions.deleteFail(err);
    });
}
}

export default alt.createActions(MyPostsActions);
