'use strict';


const express = require('express');
const router = express.Router();
const passport = require('passport');
const userController = require('./controllers/userController');
const saleController = require('./controllers/saleController');
const searchController = require('./controllers/searchController');
const myPostsController = require('./controllers/myPostsController');


router.post('/api/user/login', passport.authenticate('local'), userController.login);
router.post('/api/user/create', userController.registerUser);
router.post('/api/post/create', saleController.newPost);
router.get('/api/search/:category', searchController.findPosts);
router.get('/api/myposts/:id', myPostsController.findMyPosts);
router.get('/api/myposts/one/:id', myPostsController.findOnePost)
router.delete('/api/myposts/delete/:id', myPostsController.deletePost);

router.get('*', (req, res) => {
  res.redirect(301, '/');
});


module.exports = router;
