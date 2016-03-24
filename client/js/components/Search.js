'use strict';


import React from 'react';

// Creating Search to handle actions and store
class Search extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {

    }

    render() {
        return (
            <div>
                <h1>Search Page</h1>
                <button onClick={this.handleSubmit}>Search</button>
            </div>
        )
    }
}


export default Search;
