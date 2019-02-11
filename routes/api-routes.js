var express = require('express');
var db = require("../models");
var passport = require("../config/passport");
var axios = require('axios');
const cheerio = require("cheerio");

module.exports = function (app) {

  app.post("/api/signup", function (req, res) {
    console.log(req.body);
    db.User.create({
      email: req.body.email,
      password: req.body.password,
    })
      .then(function (dbPost) {
        res.json(dbPost);
      });
  });

  app.post("/api/favorite", function (req, res){
    console.log('user adding favorite' , req.user);
    db.Favorites.create({
      email: req.body.email,
      productName: req.body.title ,
      productImage: req.body.img,
      favorite: true,
      tryLater: false,
      link: req.body.link,
    })
    .then(function (dbFavPost){
      res.json(dbFavPost);
    })
  })

  app.post("/api/destroy/", function (req, res){
    console.log('user deleting favorite' , req.body);
    db.Favorites.destroy({
      where:{
        email: req.body.email,
        id: req.body.id
      }
    })
    .then(function (dbFavDestroy){
      res.json(dbFavDestroy);
      console.log('the favorite has been destroyed')
    })
  })

  app.post("/api/login", passport.authenticate("local"), function (req, res) {
    res.json(req.user);
  });

  app.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
  });

  app.get("/scrape", function (req, res) {

    const { query } = req.query;
    console.log(query);
    axios.all([
      axios.get(`https://www.sephora.com/search?keyword=${query}`),
      axios.get(`https://www.peachandlily.com/search?q=${query}`),
      axios.get(`https://sokoglam.com/search?type=product&q=${query}`),
    ]).then(axios.spread((sephRes, plRes, sgRes) => {

      var products = [];
      var $ = cheerio.load(plRes.data);


      $(".product").each(function (i, element) {

        var title = $(this).find('.product-title').text();
        var link = 'https://www.peachandlily.com'+ $(this).find('.product-title').attr('href');
        var img = 'https:' + $(this).find('.image-inner-wrap > img').attr('src');
        var price = $(this).find('.product-price').text();

        if (!title || !link || !img) return;

        var productInfo = {
          title,
          link,
          img,
          price
        };

        products.push(productInfo);
      });

      $ = cheerio.load(sgRes.data);

      $(".product-grid-item").each(function (i, element) {

        var title = $(this).find('.product__title').text();
        var link = 'https://sokoglam.com' + $(this).find('.product__title > a').attr('href');
        var img = 'https:' + $(this).find('.product__image > a > img').attr('src');
        var price = $(this).find('.ProductPrice').text();

        if (!title || !link || !img) return;

        var productInfo = {
          title,
          link,
          img,
          price
        };


        products.push(productInfo);

      });

      // $ = cheerio.load(sephRes.data);

      // $(".css-12egk0t").each(function (i, element) {

        // var title = $(this).find('.css-ktoumz').text();
        // console.log(title)
        // var link = $(this).find('.css-ix8km1').attr('href');
        // console.log(link)
        // var img = $(this).find('.css-1glglyy').attr('src');
        // console.log(img)
        // var price = $(this).find('.css-0').text();
        // console.log(price)

        // if (!title || !link || !img) return;

        // var productInfo = {
        //   title,
        //   link,
        //   img,
        //   price
        // };

        // console.log(productInfo);
        // products.push(productInfo);

      // });
      // console.log(products);
      res.send(products)
    }
    ))
  })

  app.get("/api/favorite", function (req, res){
    console.log('this is the request for favorites' , req.query);
    db.Favorites.findAll({
      where:{
        email: req.query.userEmail
      }
    })
    .then(function (dbFavPopulate){
      res.json(dbFavPopulate);
      console.log('this has been added to favorites')
    })
  })

};