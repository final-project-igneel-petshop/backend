'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn("catProducts", "description", {type: Sequelize.STRING(2555)})
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');

    */
   return queryInterface.changeColumn("catProducts", "description", {type: Sequelize.STRING(2555)})
  }
};
