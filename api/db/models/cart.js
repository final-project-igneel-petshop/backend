"use strict";
module.exports = (sequelize, DataTypes) => {
  const cart = sequelize.define(
    "cart",
    {
      imagePath: DataTypes.STRING,
      title: DataTypes.STRING,
      price: DataTypes.INTEGER,
      totalPrice: DataTypes.INTEGER,
      totalQte: DataTypes.INTEGER,
      fullName: DataTypes.STRING,
      email: DataTypes.STRING,
      street: DataTypes.STRING,
      city: DataTypes.STRING,
      zipCode: DataTypes.INTEGER,
      productId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      catProductId: DataTypes.INTEGER
    },
    {}
  );
  cart.associate = function(models) {
    cart.belongsTo(models.users);
    cart.belongsTo(models.catProducts)
  };
  return cart;
};
