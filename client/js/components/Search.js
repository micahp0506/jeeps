'use strict';


import alt from '../utils/alt';
import React from 'react';
import SearchActions from '../actions/SearchActions';
import SearchStore from '../stores/SearchStore';


// Creating Search to handle actions and store
class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = SearchStore.getState();
        this.onChange = this.onChange.bind(this);
        this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
        this.handleCategoryChange = this.handleCategoryChange.bind(this);
        this.handleNewSearchSubmit = this.handleNewSearchSubmit.bind(this);

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
        this.setState(state);
    }

    // Handling the category value change
    handleCategoryChange() {
        this.setState({category: this.refs.menu.value})
    }

    // Handling new search submit reseting the SearchStore state
    handleNewSearchSubmit() {
        alt.recycle(SearchStore);
    }

    // Handling search submit
    handleSearchSubmit() {
        let category = this.refs.menu.value;
        SearchActions.getPost(category);
    }

    render() {
        if (this.state.searchState) {
            console.log("this.state.searchResults", this.state.searchResults);
            console.log("this.props", this.props);
            return (
                <div>
                    {this.state.searchResults.map((post) => {
                        console.log("post", post);
                        return (
                            <div className="item" key={post.postId}>
                                <span className="content listing">
                                    <span className="listing-price">$ {post.price}</span>
                                    <span className="listing-title">{post.year} {post.make} {post.model}</span>
                                    <span className="listing-description">{post.description}</span>
                                    <span className="listing-contact">Contact: {post.contactName} at {post.contactEmail}</span>
                                    <span>Location: {post.location}</span>
                                </span>
                            </div>
                        )
                    })}
                    <button className="newSearch" onClick={this.handleNewSearchSubmit}>New Search</button>
                </div>
            )
        } else {
            return (
                <div className="search">
                    <h1 className="searchTitle">Search for listing</h1>
                    <div className="form-group-search">
                        <label className="control-label category-search">Choose Category</label>
                        <div className="">
                            <select className="form-control inputs2" id="expertise" ref="menu" onChange={this.handleCategoryChange}>
                                    <option ref="atv" value="ATV">ATV</option>
                                    <option ref="utv" value="UTV">UTV</option>
                                    <option ref="dirt" value="Bike">Dirt Bike</option>
                                    <option ref="jeep" value="Jeep">Jeep</option>
                                    <option ref="jeep" value="Truck">Truck</option>
                                    <option ref="other" value="Other">Other</option>
                            </select>
                        </div>
                    </div>
                    <button className="btn btn-default post-btn search-btn" onClick={this.handleSearchSubmit}>Search</button>
                </div>
            )
        }
    }
}

export default Search;

