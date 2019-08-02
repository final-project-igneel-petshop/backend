"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "users",
      [
        {
          fullName: "Irfan Risyad Sumapraja",
          email: "jaypang8@gmail.com",
          password: "password",
          phoneNumber: "081314829525",
          street: "Jl. Seruni IV no 5",
          city: "Jakarta",
          zipcode: 13460,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
