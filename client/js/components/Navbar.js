'use strict';


import React from 'react';
// import UserActions from '../actions/UserActions';

export default React.createClass({
  render() {
    return (
        <div className="ui inverted menu navbar ">
            <a href="#" className="brand item logo-container">Jeepers</a>
            <a className="item" href="#/home">Home</a>
            <a className="item" id="login" href="#/login">Log In</a>
        </div>
    )
  }
})
