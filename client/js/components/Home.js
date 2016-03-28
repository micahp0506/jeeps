'use strict';


import React from 'react';
import {Route, Router, browserHistory, Link} from 'react-router';



export default React.createClass({
  render() {
    return (
        <div className="home">
            <div className="buttonHome">
                <p className="homeContent">WE SELL JEEPS....</p>
                <p className="dirty">And other things that get dirty.</p>
            </div>
        </div>
    )
  }
})
