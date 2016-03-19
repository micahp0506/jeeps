'use strict'

import React from 'react';
import Router from 'react-router';
import ReactDOM from 'react-dom';
import routes from './config/routes';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import $ from '../bower_components/jquery/dist/jquery.min.js';
import '../bower_components/semantic/dist/semantic.min.js';
let history = createBrowserHistory();



ReactDOM.render((
  <Router history={history}>
    {routes}
  </Router>
), document.getElementById('app'))
