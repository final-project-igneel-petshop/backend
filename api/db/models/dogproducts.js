'use strict';
module.exports = (sequelize, DataTypes) => {
  const dogProducts = sequelize.define('dogProducts', {
    imagePath: DataTypes.STRING,
    title: DataTypes.STRING,
    qte: DataTypes.INTEGER,
    description: DataTypes.STRING,
    price: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  dogProducts.associate = function(models) {
    // associations can be defined here
  };
  return dogProducts;
};