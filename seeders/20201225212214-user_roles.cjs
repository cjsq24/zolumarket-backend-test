'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const createdAt = new Date()
    const updatedAt = new Date()
    await queryInterface.bulkInsert('user_roles', [{
        id_role: 1,
        id_user: 1,
        createdAt,
        updatedAt
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('user_roles', null, {});
  }
};
