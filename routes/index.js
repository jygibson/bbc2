const axios=require("axios");
const cheerio= require("cheerio");
const express=require('express');
var app = express();

app.get("/scrape", function (req, res){
    axios.all([
        axios.get('https://www.sephora.com/shop/'),
        axios.get('https://www.peachandlily.com/collections/skincare'),
        axios.get('https://sokoglam.com/collections/skincare'),
        axios.get('https://www.glossier.com/products'),
        axios.get('https://www.ulta.com/skin-care?N=2707'),
    ]).then(axios.spread((sephRes, plRes, sgRes, gRes, uRes) => {
        var $ = cheerio.load(sephRes.data + plRes.data + sgRes.data + gRes.data +uRes.data);
        
        console.log($);
        }));
    });