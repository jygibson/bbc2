//restricting routes a user can see if not logged in
module.exports = function(req, res, next){
    if (req.user){
        return next();
    }

    return res.redirect("home");
};