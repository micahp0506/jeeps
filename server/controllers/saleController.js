'use strict';


const db = require('../models/');
db.sequelize.sync().then(()=> {
    console.log("db synced");
});

const SaleController = {};

// Controls the posting of a new add
SaleController.newPost = (req, res, done) => {
    let post = db.Post.build({
                    userId: req.body.userId,
                    contactEmail: req.body.contactEmail,
                    contactName: req.body.contactName,
                    location: req.body.location,
                    make: req.body.make,
                    model: req.body.model,
                    year: req.body.year,
                    price: req.body.price,
                    description: req.body.description,
                    category: req.body.category,
                    image: req.body.image

                });
                post.save()
                    .then(function(thing) {
                        res.sendStatus(200);
                        // return done(null)
                    })
                    .catch(function(err){
                        return done(null, false, res.status('loginMessage', err));
                    });
}

module.exports = SaleController;
