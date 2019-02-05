var express = require('express');
var db = require("../models");
var passport = require("../config/passport");
var axios = require('axios');
const cheerio= require("cheerio");

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


app.get("/scrape", function (req, res){
  

 const { query } = req.query;
 console.log(query);
    axios.all([
        axios.get(`https://www.sephora.com/search?keyword=${query}`),
        axios.get(`https://www.peachandlily.com/search?q=${query}`),
        axios.get(`https://sokoglam.com/search?type=product&q=${query}`),
    ]).then(axios.spread((sephRes, plRes, sgRes) => {
        var $ = cheerio.load(sephRes.data + plRes.data + sgRes.data);
        console.log(sgRes.data)
        }));
    });
}