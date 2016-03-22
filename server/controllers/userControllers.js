'use strict';


const db = require('../models/');
db.sequelize.sync();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const UserController = {};

// Controls users registration as a new user
UserController.registerUser = function (req, res, done) {
    console.log("controller in");
    db.User.findOne({where:{userEmail: req.body.userEmail}})
        .then((existingUser)=> {
            if (existingUser) {
                res.sendStatus(403);
                // return done(null, false, res.send('signupMessage', 'That email is already taken.'));
            } else {
                let newUser = db.User.build({
                    userEmail: req.body.userEmail,
                    userPassword: db.User.generateHash(req.body.userPassword)
                });
                newUser.save()
                    .done(function() {
                        res.sendStatus(200);
                        // return done(null)
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
UserController.loginUser = function (req, res) {
    console.log("loginUser in");
    console.log("req.body", req.body);

    // Serialize sessions
    passport.serializeUser(function(user, done) {
        console.log("user", user);
        console.log("userId", user.userId);
        done(null, user.userId);
    });

    passport.deserializeUser(function(id, done) {
        db.User.find({where: {userId: id}}).success(function(user){
            done(null, user);
        }).error(function(err){
            done(err, null);
        });
    });

    // Use local strategy to create user account
    passport.use(new LocalStrategy(
        function(email, password, done) {
            console.log("passport.use in");
            User.find({ where: { userEmail: email }}).success(function(user) {
                if (!user) {
                    done(null, false, { message: 'Unknown user' });
                } else if (password != user.userPassword) {
                    done(null, false, { message: 'Invalid password'});
                } else {
                    db.User.authenticate(password, (err, valid) => {
                    if (err) throw err;

                    if (valid) {
                        console.log("User loggged in");
                        // return done(null, user);
                        res.sendStatus(200);
                    } else {
                        return done();
                    }
                });
                    done(null, user);
                }
            }).error(function(err){
                done(err);
            });
        }
    ));

    // passport.use(new LocalStrategy({
    //     usernameField: 'userEmail'
    // },
    // (email, password, done) => {
    //     console.log("email", email);
    //     console.log("pass", password);
    //     db.User.findOne({where:{userEmail: req.body.userEmail}})
    //     .then((err, user)=> {
    //         if (err) throw (err);

    //         if (user) {
    //             db.User.authenticate(password, (err, valid) => {
    //                 if (err) throw err;

    //                 if (valid) {
    //                     console.log("User loggged in");
    //                     // return done(null, user);
    //                     res.sendStatus(200);
    //                 } else {
    //                     return done();
    //                 }
    //             });
    //         } else {
    //             return done();
    //         }
    //     });
    // }));
};

module.exports = UserController;
