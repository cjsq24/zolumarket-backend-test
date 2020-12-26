'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const createdAt = new Date()
    const updatedAt = new Date()
    await queryInterface.bulkInsert('roles', [{
        id_role: 1,
        name: 'Cliente',
        createdAt,
        updatedAt
      }, {
        id_role: 2,
        name: 'Delivery',
        createdAt,
        updatedAt
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('roles', null, {});
  }
};
