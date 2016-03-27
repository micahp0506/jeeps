'use strict';


import React from 'react';
import {Route, Router, browserHistory, Link} from 'react-router';



export default React.createClass({
  render() {
    return (
        <div className="parent">
            <Link to={'/search'} className="ui black inverted button">Search Inventory</Link>
            <Link to={'/sale'} className="ui black inverted button">Sale your Rig</Link>
        </div>
    )
  }
})
