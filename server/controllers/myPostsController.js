'use strict';


const db = require('../models/');
db.sequelize.sync();

const MyPostsController = {};


MyPostsController.findMyPosts = (req, res, done) => {
    let search = db.Post.findAll({where: {userId: req.params.id}}).then(function(posts) {
        res.send(posts)
    })
    .catch(function(err) {
        return done(null, false, res.status('myPostsMessage', err));
    })
}

MyPostsController.deletePost = (req, res, done) => {
    console.log("delete post in", req.params);
    db.Post.findOne({where: {postId: req.params.id}}).then(function(post) {
        post.destroy();
    })
    .then(function() {
        console.log("id", req.params.id);
        res.sendStatus(200).send(req.params.id);
    })
    .catch(function(err) {
        return done(null, false, res.status('myPostsMessage', err));
    })
}

MyPostsController.findOnePost = (req, res, done) => {
    let search = db.Post.findOne({where: {postId: req.params.id}}).then(function(post) {
        console.log("post", post);
    })
}


module.exports = MyPostsController;
