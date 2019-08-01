"use strict";
module.exports = (sequelize, DataTypes) => {
  const cart = sequelize.define(
    "cart",
    {
      totalPrice: DataTypes.INTEGER,
      totalQte: DataTypes.INTEGER,
      street: DataTypes.STRING,
      city: DataTypes.STRING,
      zipCode: DataTypes.INTEGER,
      paymentId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER
    },
    {}
  );
  cart.associate = function(models) {
    cart.belongsTo(models.user);
  };
  return cart;
};
