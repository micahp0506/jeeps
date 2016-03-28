'use strict';


import React from 'react';
import {Route, Router, browserHistory, IndexRoute} from 'react-router';
import App from '../components/App';
import Home from '../components/Home';
import Login from '../components/Login';
import Register from '../components/Register';
import Search from '../components/Search';
import Sell from '../components/Sell';
import MyPosts from '../components/MyPosts';

export default (
    <Router history={browserHistory}>
        <Route component={App}>
            <Route path='/' component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/search' component={Search} />
            <Route path='/sale' component={Sell} />
            <Route path='/myposts' component={MyPosts} />
        </Route>
    </Router>
);
