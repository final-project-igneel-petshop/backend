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
      status: DataTypes.BOOLEAN,
      userId: DataTypes.INTEGER,
      catProductId: DataTypes.INTEGER,
      dogProductId: DataTypes.INTEGER,
    },
    {}
  );
  cart.associate = function(models) {
    cart.belongsTo(models.users);
    cart.belongsTo(models.catProducts)
    cart.belongsTo(models.dogProducts)
  };
  return cart;
};
