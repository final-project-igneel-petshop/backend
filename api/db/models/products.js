'use strict';
module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define('product', {
    imagePath: DataTypes.STRING,
    title: DataTypes.STRING,
    qte: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    price: DataTypes.INTEGER,
    createdAt: {
      type: DataTypes.DATA, defaultValue:DataTypes.NOW
    },
    updateAt: {
      type: DataTypes.DATE, defaultValue: DataTypes.NOW
    }
  }, {});
  
  return product;
};