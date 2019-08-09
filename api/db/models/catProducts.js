'use strict';
module.exports = (sequelize, DataTypes) => {
  const catProducts = sequelize.define('catProducts', {
    imagePath: DataTypes.STRING,
    title: DataTypes.STRING,
    qte: DataTypes.INTEGER,
    description: DataTypes.STRING(2555),
    price: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  catProducts.associate = function(models) {
    catProducts.hasMany(models.cart)
  };
  return catProducts;
};