'use strict'


import alt from '../utils/alt';
import React from 'react';
import MyPostsActions from '../actions/MyPostsActions';
import MyPostsStore from '../stores/MyPostsStore';


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
                                <span className="listing-title">{post.make} {post.model} {post.year}</span>
                                <span className="listing-description">{post.description}</span>
                                <span className="listing-contact">{post.contactName} {post.contactEmail}</span>
                                <span className="listing-location">{post.location}</span>
                            </span>
                            <button value={post.postId} onClick={this.handleDeletePost}>Delete Post</button>
                        </div>
                    )
                })}
            </div>
        )
    } else {
        return (
            <div><h1>You Have No Posts.</h1></div>
            )
    }
    }
}

export default MyPosts;
