'use strict';


const express = require('express');
const router = express.Router();
const passport = require('passport');
const userController = require('./controllers/userController');
const saleController = require('./controllers/saleController');


router.post('/api/user/login', passport.authenticate('local'), userController.login);
router.post('/api/user/create', userController.registerUser);
router.post('/api/post/create', saleController.newPost);


module.exports = router;
