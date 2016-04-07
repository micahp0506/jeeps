'use strict'


import alt from '../utils/alt';
import React from 'react';
import MyPostsActions from '../actions/MyPostsActions';
import MyPostsStore from '../stores/MyPostsStore';
import Navbar from '../components/Navbar';


// Creating Search to handle actions and store
class MyPosts extends React.Component {

    constructor(props) {
        super(props);
        this.state = MyPostsStore.getState();
        console.log("this.state", this.state);
        this.onChange = this.onChange.bind(this);
        this.handleDeletePost = this.handleDeletePost.bind(this);
    }
    // Listening to changes at the store
    componentDidMount() {
        MyPostsStore.listen(this.onChange);
    }

    // Unlistening to changes at the store
    componentWillUnmount() {
        MyPostsStore.unlisten(this.onChange);
    }

    // When change occurs handle state
    onChange(state) {
        console.log("state", state);
        this.setState(state);
    }

    // Handling deletion of post
    handleDeletePost(e) {
        MyPostsActions.deletePost(e.target.value);
    }

    // Handling editing of post
    handleEditPost(e) {
        console.log("e", e.target.value);
    }

    render() {
        if (this.state.searchState) {
        return (
            <div>
                {this.state.searchResults.map((post) => {
                    console.log("results", post);
                    return (
                        <div className="item" key={post.postId}>
                            <span className="content listing">
                                <span className="listing-price">$ {post.price}</span>
                                <span className="listing-title">{post.year} {post.make} {post.model}</span>
                                <span className="listing-description">{post.description}</span>
                                <span className="listing-contact">Contact: {post.contactName} at {post.contactEmail}</span>
                                <span>Location: {post.location}</span>
                            </span>
                            <button className="btn btn-default delete" value={post.postId} onClick={this.handleEditPost}>Edit Post</button>
                            <button className="btn btn-danger delete" value={post.postId} onClick={this.handleDeletePost}>Delete Post</button>
                        </div>
                    )
                })}
            </div>
        )
    } else {
        return (
            <div><h1 className="noPosts">You Have No Posts To Show.</h1></div>
            )
    }
    }
}

export default MyPosts;
