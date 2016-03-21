'use strict';


const db = require('../models/');
db.sequelize.sync();

const UserController = {};

// Controls users registering as technicians
UserController.registerUser = function (req, res) {
    db.User.findOrCreate({where: {userEmail: req.body.userEmail, userPassword: req.body.userPassword}}).spread((user, created) => {
        if (!created) {

            res.sendStatus(404)
        } else {
            console.log("success");
          res.sendStatus(200);
        }
    });
};

module.exports = UserController;
