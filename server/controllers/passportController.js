'use strict';


const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const db = require('../models/');
db.sequelize.sync();

// Using passport to authenticate the user
passport.serializeUser(function(user, done) {
    // console.log("user", user);
    done(null, user.userId);
});

passport.deserializeUser(function(id, done) {
    console.log("id", id);
    db.User.findOne({where: {userId: id}}).then(function(user){
        done(null, user);
    }).catch(function(err){
        done(err, null);
    });
});

//Use local strategy to login user
passport.use(new LocalStrategy({usernameField: 'userEmail', passwordField: 'userPassword'},
    function(email, password, done) {
        db.User.findOne({ where: { userEmail: email }})
            .then(function(user) {
                if (!user) {
                    return done(null, false, { message: 'Unknown user' });
                } else {
                    user.authenticate(password, (err, valid) => {
                        if (err) throw err;

                        if (valid) {
                            console.log("User Authenticated");
                            return done(null, user);
                        } else {
                            return done();
                        }
                    });
                    return done(null, user);
                }
            }).catch(function(err){
                console.log("err", err);
                    return done(err);
            });
}));

