"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn("users", "city", Sequelize.STRING, {
        after: "address"
      }),
      queryInterface.addColumn("users", "zipcode", Sequelize.INTEGER, {
        after: "city"
      })
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn("users", "city"),
      queryInterface.removeColumn("users", "zipcode")
    ]);
  }
};
