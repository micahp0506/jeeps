'use strict';


const express = require('express');
const router = express.Router();
const userController = require('./controllers/userControllers');


router.post('/api/user/create', userController.registerUser);
router.post('/api/user', userController.loginUser);

module.exports = router;
