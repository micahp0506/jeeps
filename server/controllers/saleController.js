'use strict';


const db = require('../models/');
db.sequelize.sync().then(()=> {
    console.log("db synced");
});

const SaleController = {};

// Controls the posting of a new add
SaleController.newPost = (req, res, done) => {
    console.log("req.body", req.body);
    let post = db.Post.build({
                    contactEmail: req.body.contactEmail,
                    contactName: req.body.contactName,
                    make: req.body.make,
                    model: req.body.model,
                    year: req.body.year,
                    description: req.body.description,
                    category: req.body.category,
                    userId: req.body.userId
                });
                post.save()
                    .then(function(thing) {
                        console.log("thing", thing);
                        res.sendStatus(200);
                        // return done(null)
                    })
                    .catch(function(err){
                        return done(null, false, res.status('loginMessage', err));
                    });
}

module.exports = SaleController;
