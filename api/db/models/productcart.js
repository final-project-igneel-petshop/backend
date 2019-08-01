'use strict';
module.exports = (sequelize, DataTypes) => {
  const productCart = sequelize.define('productCart', {
    totalPrice: DataTypes.INTEGER,
    totalQte: DataTypes.INTEGER,
    productid: DataTypes.INTEGER,
    cartId: DataTypes.INTEGER,
  }, {});
  productCart.associate = function(models) {
    productCart.belongsTo(models.cart)
    productCart.belongsTo(models.product)
  };
  return productCart;
};