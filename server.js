const express = require("express");
const db = require("./models");
var routes = require("./routes");
const axios=require("axios");
const cheerio= require("cheerio");
const PORT = process.env.PORT || 3000;
const app = express();


app.use(express.urlencoded({ extended: true}));
app.use(express.json());

if (process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"));
}
var query = process.argv[2];
// app.use(routes);
app.get("/scrape", function (req, res){
    axios.all([
        axios.get('https://www.sephora.com/search?keyword='+query),
        axios.get('https://www.peachandlily.com/search?q='+query),
        axios.get('https://sokoglam.com/search?type=product&q='+query),
    ]).then(axios.spread((sephRes, plRes, sgRes) => {
        var $ = cheerio.load(sephRes.data + plRes.data + sgRes.data);
        
        console.log(plRes.data);
        }));
    });

db.sequelize.sync().then(function() {
    app.listen(PORT, function(){
        console.log(`thank you for using beautybunny on port ${PORT}`);
    });
});

module.exports = app;