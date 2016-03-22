'use strict';


const express = require('express');
const router = express.Router();
const passport = require('passport');
const userController = require('./controllers/userController');


router.post('/api/user/login', passport.authenticate('local'), (req, res, next) => {
    console.log('hey')
    next()
}, userController.login);
router.post('/api/user/create', userController.registerUser);


module.exports = router;
