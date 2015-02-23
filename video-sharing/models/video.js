"use strict";

module.exports = function(sequelize, DataTypes) {
  var Video = sequelize.define("Video", {
    title: DataTypes.STRING(20),
    filename: DataTypes.STRING(32),
    tags: DataTypes.STRING(100)
  }, {
    classMethods: {
      associate: function(models) {
        Video.hasMany(models.Comment);
        Video.belongsTo(models.User);
      }
    }
  });

  return Video;
};