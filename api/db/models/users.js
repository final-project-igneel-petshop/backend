'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('users', {
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    street: DataTypes.STRING,
    city: DataTypes.STRING,
    zipcode: DataTypes.INTEGER
  }, {});
  user.associate = function(models) {
    user.hasMany(models.cart)
  };
  return user;
};