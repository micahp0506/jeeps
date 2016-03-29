'use strict';


import React from 'react';
import Navbar from './Navbar';
import $ from '../bowerComponents/jquery/dist/jquery.min.js';


class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar history={this.props.history} />
        {this.props.children}
      </div>
    );
  }
}

export default App;
