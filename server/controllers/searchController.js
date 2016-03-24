'use strict';


const db = require('../models/');
db.sequelize.sync();

const SearchController = {};

// Controls the getting of the desired post/posts
SearchController.findPosts = (req, res, done) => {
    let search = db.Post.findAll({}).then(function(posts) {
        res.send(posts)
    })
    .catch(function(err) {
        return done(null, false, res.status('searchMessage', err));
    })
}

module.exports = SearchController;
