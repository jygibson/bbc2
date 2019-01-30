var path = require("path");

var isAuthenticated = require("../config/middleware/isAuthenticated");

// module.exports = function(app){
//     app.get("/", function(req, res){
//         if(req.user){
//             res.redirect("/members");
//         }
//         res.sendFile(path.join(_dirname, ""))
//     }
// }