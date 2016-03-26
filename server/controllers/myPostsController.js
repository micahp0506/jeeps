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
        res.send('Post Removed.')
    })
    .catch(function(err) {
        return done(null, false, res.status('myPostsMessage', err));
    })
}


module.exports = MyPostsController;
