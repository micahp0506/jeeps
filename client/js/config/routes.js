'use strict';


import React from 'react';
import {Route, Router, browserHistory, IndexRoute} from 'react-router';
import App from '../components/App';
import Home from '../components/Home';
import Login from '../components/Login';
import Register from '../components/Register';

export default (
    <Router history={browserHistory}>
        <Route component={App}>
            <Route path='/' component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
        </Route>
    </Router>
);
