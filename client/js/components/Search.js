'use strict';


import React from 'react';
import SearchActions from '../actions/SearchActions';
import SearchStore from '../stores/SearchStore';
import Base64 from 'base-64';

// Creating Search to handle actions and store
class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = SearchStore.getState();
        this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    // Listening to changes at the store
    componentDidMount() {
        SearchStore.listen(this.onChange);
    }

    // Unlistening to changes at the store
    componentWillUnmount() {
        SearchStore.unlisten(this.onChange);
    }

    // When change occurs handle state
    onChange(state) {
        console.log("state", state);
        this.setState(state);
    }

    // Handling search submit
    handleSearchSubmit() {
        console.log("search");
        SearchActions.getPost();
    }

    render() {
        if (this.state.searchState) {
            console.log("this.state.searchResults", this.state.searchResults);
            console.log("this.props", this.props);
            return (
                <div>
                    {this.state.searchResults.map((post) => {
                        console.log("image", post.image);
                        let image = 'data:image/png;base64,' + post.image;
                        return (
                            <div className="item" key={post.postId}>
                                <div>
                                    <img src={uri: image}></img>
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
                <div>
                    <h1>Search for listing</h1>
                    <button onClick={this.handleSearchSubmit}>Search</button>
                </div>
            )
        }

    }
}

export default Search;

