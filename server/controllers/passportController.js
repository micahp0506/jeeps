'use strict';


const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const db = require('../models/');
db.sequelize.sync();

passport.serializeUser(function(user, done) {
    done(null, user.userId);
});

passport.deserializeUser(function(id, done) {
    db.User.findById({userId: id}).then(function(user){
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
                    done(null, false, { message: 'Unknown user' });
                } else {
                    user.authenticate(password, (err, valid) => {
                        if (err) throw err;

                        if (valid) {
                            console.log("User loggged in");
                            return done(null, user);
                        } else {
                            return done();
                        }
                    });
                    done(null, user);
                }
            }).catch(function(err){
                    done(err);
            });
}));

