var express = require('express');
var router = express.Router();
var db = require("../models");
var passport = require("../config/passport");
var bcrypt = require('bcrypt-nodejs');
module.exports = function(app) {

app.post("/api/signup", function(req, res) {
    console.log(req.body);
    db.User.create({
      email: req.body.email,
      password: req.body.password,
    })
      .then(function(dbPost) {
        res.json(dbPost);
      });
});
    
    // router.post("/api/login", passport.authenticate("local"), function(req,res){
    //     res.json("/members");
    // });

    // router.post("/signup", function(req, res){
    //     console.log("this is being called", req.body);
    //     db.User.create({
    //         email: req.body.email,
    //         password: req.body.password
    //     }).then(function(){
    //         res.redirect(307, "/api/login");
    //     }).catch(function(err){
    //         console.log(err);
    //         res.json(err);
    //     });
    // });

    // router.post('/signup', (req,res,next) =>{
    //     console.log('the incoming body'+ req.body);
    //     const user = new db.User({
    //         email: req.body.email,
    //         password: req.body.password
    //     });
    //     bcrypt.genSalt(10,(err, salt)=> {
    //         bcrypt.hash(user.password, salt, async (err, hash)=>{
    //             user.password = hash;
    //             try {
    //                 const newUser = await user.save();
    //                 res.send(newUser);
    //                 next()
    //             } catch(err){
    //                 res.status(400).send('something went wrong')
    //             }
    //         });
    //     });
    // });

    // router.get("/logout", function(req, res){
    //     req.logout();
    //     res.redirect("/");
    // });

    // router.get("/api/user_data", function(req,res){
    //     if (!res.user){
    //         res.json({});
    //     }
    //     else {
    //         res.json({
    //             email: req.user.email,
    //             id: req.user.id
    //         });
    //     }
    // });
}