const express = require("express");
const db = require("./models");
var routes = require("./routes");

const PORT = process.env.PORT || 3000;
const app = express();


app.use(express.urlencoded({ extended: true}));
app.use(express.json());

if (process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"));
}

// app.use(routes);

db.sequelize.sync().then(function() {
    app.listen(PORT, function(){
        console.log(`thank you for using beautybunny on port ${PORT}`);
    });
});

module.exports = app;