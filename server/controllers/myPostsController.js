'use strict';


const db = require('../models/');
db.sequelize.sync();

const MyPostsController = {};


MyPostsController.findMyPosts = (req, res, done) => {
    console.log("req.params", req.params);
    let search = db.Post.findAll({where: {userId: req.params.id}}).then(function(posts) {
        res.send(posts)
    })
    .catch(function(err) {
        return done(null, false, res.status('myPostsMessage', err));
    })
}


module.exports = MyPostsController;
