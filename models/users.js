module.exports = function (sequelize, DataTypes){  
    var User = sequelize.define("User", {
        email: {
            type: DataTypes.STRING,
            validate:{
                isEmail: true
            }
        },
        password:{
            type: DataTypes.STRING,
            notNull: true,
    },
})
return User;
};