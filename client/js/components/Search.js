'use strict';


import React from 'react';
import SearchActions from '../actions/SearchActions';
import SearchStore from '../stores/SearchStore';

// Creating Search to handle actions and store
class Search extends React.Component {

    constructor(props) {
        super(props);
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
        return (
            <div>
                <h1>Search Page</h1>
                <button onClick={this.handleSearchSubmit}>Search</button>
            </div>
        )
    }
}


export default Search;
