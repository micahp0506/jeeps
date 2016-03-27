'use strict';


const db = require('../models/');
db.sequelize.sync();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const UserController = {};

// Controls users registration as a new user
UserController.registerUser = (req, res, done) => {
    db.User.findOne({where:{userEmail: req.body.userEmail}})
        .then((existingUser)=> {
            if (existingUser) {
                return done(null, false, res.send('signupMessage', 'That email is already taken.'));
            } else {
                let newUser = db.User.build({
                    userEmail: req.body.userEmail,
                    userPassword: db.User.generateHash(req.body.userPassword)
                });
                newUser.save()
                    .done(function() {
                        return done('registerMesage', 'New user created.')
                    })
                    .catch(function(){
                        return done(null, false, res.status('loginMessage', err));
                    });
                }
        })
        .catch(function(e) {
            console.log(e);
            return (null, false, res.status('loginMessage',e.name + " " + e.message));
        });
};

// Controls the logging in of a user
UserController.login = (req, res, done) => {
    db.User.findOne({where:{userEmail: req.body.userEmail}})
        .then((user) => {
            res.send(user);
        })
}


module.exports = UserController;
