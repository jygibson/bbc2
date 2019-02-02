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
    

app.post("/api/login", passport.authenticate("local"), function(req, res) {

  res.json("/user");
});
}