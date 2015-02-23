"use strict";

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    username: DataTypes.STRING(15),
    password: DataTypes.STRING(15),
    firstname: DataTypes.STRING(15),
    lastname: DataTypes.STRING(15),
    fb: DataTypes.STRING(15),
    google: DataTypes.STRING(15),
    email: DataTypes.STRING(15)
  }, {
    classMethods: {
      associate: function(models) {
        User.hasMany(models.Video);
      }
    }
  });

  return User;
};