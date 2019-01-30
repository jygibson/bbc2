const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const db = require("../models");


//use a local strategy
passport.use(new LocalStrategy(
    //using an email instead of a username
    {
        usernameField: "email"
    },
    function(email, password, done) {
        //this code runs on sign in to find them in the db
        db.User.findOne({
            where: {
                email:email
            }
        }).then(function(dbUser){
            //if no user with that email in db, respond incorrect email
            if(!dbUser) {
                return done (null, false, {
                    message: "Incorrect email!"
                });
            }
            //if user email returns but password is wrong
            else if (!dbUser.validPassword(password)){
                return done(null, false, {
                    message: "Incorrect password"
                });
            }
//if neither of those happen, return the user
            return done(null, dbUser);
        })
    }
));

//boilerplate code to serialize and deserialize sessions across http requests
passport.serializeUser(function(user, cb){
    cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
    cb(null, obj);
});

module.exports = passport;