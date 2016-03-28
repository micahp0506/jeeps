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
                            <div className="post" key={post.postId}>
                                <div>
                                    <img className="image" src={"data:image/png;base64," + post.image }></img>
                                </div>
                                <div className="make">
                                  <span>Make:  </span>
                                  {post.make}
                                </div>
                                <div className="model">
                                  <span>Model:  </span>
                                  {post.model}
                                </div>
                                <div className="year">
                                  <span>Year:  </span>
                                  {post.year}
                                </div>
                                <div className="price">
                                  <span>Price:  </span>
                                  {post.price}
                                </div>
                                <div className="description">
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
                    <button onClick={this.handleNewSearchSubmit}>New Search</button>
                </div>
            )
        } else {
            return (
                <div className="search">
                    <h1 className="searchTitle">Search for listing</h1>
                    <div className="form-group-search">
                        <label className="col-sm-2 control-label category">Choose Category</label>
                        <div className="col-sm-3">
                            <select className="form-control inputstl" id="expertise" ref="menu" onChange={this.handleCategoryChange}>
                                    <option ref="atv" value="ATV">ATV</option>
                                    <option ref="utv" value="UTV">UTV</option>
                                    <option ref="dirt" value="Bike">Dirt Bike</option>
                                    <option ref="jeep" value="Jeep">Jeep</option>
                                    <option ref="jeep" value="Truck">Truck</option>
                                    <option ref="other" value="Other">Other</option>
                            </select>
                        </div>
                    </div>
                    <button className="btn btn-default post-btn" onClick={this.handleSearchSubmit}>Search</button>
                </div>
            )
        }
    }
}

export default Search;

