const express = require("express");
const session = require("express-session");
const passport = require("./config/passport");
const db = require("./models");
// var routes = require("./routes");
const cheerio= require("cheerio");
const PORT = process.env.PORT || 5000;
const user = require('./routes/api-routes');
const htmlRoutes = require('./routes/html-routes');
const app = express();
const axios= require("axios");
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Headers', 'Content-type,Authorization');
    next();
  });
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);
//creating sessions for passport to use of login status
app.use(session({secret:"keyboard cat", resave:true, saveUninitialized:true}));


if (process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"));
}

db.sequelize.sync().then(function() {
    app.listen(PORT, function(){
        console.log(`thank you for using beautybunny on port ${PORT}`);
    });
});

module.exports = app;