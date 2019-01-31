var path = require("path");
var express = require('express');
var router = express.Router();

var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = router;

// module.exports = function(app){
//     app.get("/", function(req, res){
//         if(req.user){
//             res.redirect("/members");
//         }
//         res.sendFile(path.join(_dirname, ""))
//     }
// }