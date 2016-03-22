'use strict';


const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const db = require('../models/');
db.sequelize.sync();

passport.serializeUser(function(user, done) {
    console.log("user", user);
    // console.log("userId", user.userId);
    done(null, user.userId);
});

passport.deserializeUser(function(id, done) {
    console.log("user", user);
    db.User.findById({userId: id}).then(function(user){
        done(null, user);
    }).catch(function(err){
        done(err, null);
    });
});

//Use local strategy to login user
passport.use(new LocalStrategy({usernameField: 'userEmail', passwordField: 'userPassword'},
    function(email, password, done) {
        console.log("email", email);
        console.log("password", password);
        db.User.findOne({ where: { userEmail: email }})
            .then(function(user) {
                console.log("user", user );

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


//             if (!user) {
//                 done(null, false, { message: 'Unknown user' });
//             } else if (password != user.userPassword) {
//                 done(null, false, { message: 'Invalid password'});
//             } else {
//                 console.log("before auth");
//                 db.User.authenticate(password, (err, valid) => {
//                     // console.log("password", password);
//                 if (err) throw err;

//                 if (valid) {
//                     console.log("User loggged in");
//                     // return done(null, user);
//                     res.sendStatus(200);
//                 } else {
//                     return done();
//                 }
//             });
//                 done(null, user);
//             }
//         }).catch(function(err){
//             done(err);
//         });
//     })
// );

// passport.use(new LocalStrategy(
//   function(email, password, done) {
//     console.log("email", email);
//     console.log("password", password);
//     // db.User.findOne({ username: username }, function (err, user) {
//     //   if (err) { return done(err); }
//     //   if (!user) {
//     //     return done(null, false, { message: 'Incorrect username.' });
//     //   }
//     //   if (!user.validPassword(password)) {
//     //     return done(null, false, { message: 'Incorrect password.' });
//     //   }
//     //   return done(null, user);
//     // });
//   }
// ));
