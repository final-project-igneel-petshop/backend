'use strict';
module.exports = (sequelize, DataTypes) => {
  const dogProducts = sequelize.define('dogProducts', {
    imagePath: DataTypes.STRING,
    title: DataTypes.STRING,
    qte: DataTypes.INTEGER,
    description: DataTypes.STRING(2555),
    price: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  dogProducts.associate = function(models) {
    dogProducts.hasMany(models.cart)
  };
  return dogProducts;
};