'use strict';


import React from 'react';
import {Route, Router, browserHistory, Link} from 'react-router';



export default React.createClass({
  render() {
    return (
        <div className="home">
            <div className="buttonHome">
                <Link to={'/search'}><button type="button" className="btn btn-primary btn-lg outline">Search Inventory</button></Link>
                <Link to={'/sale'}><button type="button" className="btn btn-primary btn-lg outline">Sell your Rig</button></Link>
            </div>
        </div>
    )
  }
})
