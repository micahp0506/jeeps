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


    render() {
        if (this.state.searchState) {
        return (
            <div>
                {this.state.searchResults.map((post) => {
                    console.log("results", post);
                    return (
                        <div className="item" key={post.postId}>
                            <div>
                                <img className="image" src={"data:image/png;base64," + post.image }></img>
                            </div>
                            <div className="content">
                              <span>Make:  </span>
                              {post.make}
                            </div>
                            <div className="content">
                              <span>Model:  </span>
                              {post.model}
                            </div>
                            <div className="content">
                              <span>Year:  </span>
                              {post.year}
                            </div>
                            <div className="content">
                              <span>Price:  </span>
                              {post.price}
                            </div>
                            <div className="content">
                              <span>Description:  </span>
                              {post.description}
                            </div>
                            <div className="content">
                              <span>Contact Name:  </span>
                              {post.contactName}
                            </div>
                            <div className="content">
                              <span>Contact Email:  </span>
                              {post.contactEmail}
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    } else {
        return (
            <div><h1>Loading....</h1></div>
            )
    }
    }
}

export default MyPosts;
