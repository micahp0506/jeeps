'use strict';


import React from 'react';
import {Route, Router, browserHistory, Link} from 'react-router';
// import UserActions from '../actions/UserActions';

export default React.createClass({
  render() {
    return (
        <div className="ui inverted menu navbar ">
            <a href="#" className="brand item logo-container">Jeepers</a>
            <a className="item" href="#/home">Home</a>
            <Link to={'/login'} className="item" id="login">Log In</Link>
        </div>
    )
  }
})
