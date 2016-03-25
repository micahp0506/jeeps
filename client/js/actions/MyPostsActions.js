'use strict';


import alt from '../utils/alt';


// Creating constructor to handle the users action
class MyPostsActions {
  constructor() {
    this.generateActions(
      'myPostsSuccess',
      'myPostsFail'
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
}

export default alt.createActions(MyPostsActions);
