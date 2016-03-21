'use strict';


import React from 'react';
import {Route} from 'react-router';
import Main from '../components/Main';
import Home from '../components/Home';
import Login from '../components/Login';
import Register from '../components/Register';

export default (
  <Route component={Main}>
    <Route path='/' component={Home} />
    <Route path='/login' component={Login} />
    <Route path='/register' component={Register} />
  </Route>
);