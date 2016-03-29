'use strict';


const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const logger = require('morgan');
const swig  = require('swig');
const React = require('react');
const ReactDOM = require('react-dom/server');
const Router = require('react-router');
const async = require('async');
const request = require('request');
const xml2js = require('xml2js');
const _ = require('underscore');
const passport = require('passport');
const routes = require('./routes');
const session = require('express-session')
const RedisStore = require('connect-redis')(session);
const SECRETS = process.env.SESS_SECRET || 'WORDS';
const REDIS_URL = process.env.REDIS_URL || 'redis://localhost:6379';
// Babel ES6/JSX Compiler
require('babel-register');

// Defining PORT, 3000 or process.env
const PORT = process.env.PORT || 3000;



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({
    secret: SECRETS,
    resave: false,
    saveUninitialized: true,
    store: new RedisStore ({
        url: REDIS_URL
    })
}));

app.use(passport.initialize());
app.use(passport.session());

require('./controllers/passportController');
app.use(express.static(path.join(__dirname,'..', 'client/public')));
app.use(routes);

app.listen(PORT, () => {
    console.log(__dirname)
  console.log(`Node.js server has started. Listening on port ${PORT}`);
  });
