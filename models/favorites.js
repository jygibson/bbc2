module.exports = function (sequelize, DataTypes){  
    var UserFavorites = sequelize.define("Favorites", {
        email: {
            type: DataTypes.STRING,
            validate:{
                isEmail: true
            }
        },
        productName: DataTypes.STRING,
        productImage: DataTypes.STRING,
        favorite: DataTypes.BOOLEAN,
        tryLater: DataTypes.BOOLEAN,
        link: DataTypes.STRING
})
return UserFavorites;
};