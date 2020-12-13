'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const bcrypt = require('bcryptjs');
    const password = await bcrypt.hash('123456', 10);
    const createdAt = new Date()
    const updatedAt = new Date()
    await queryInterface.bulkInsert('users', [
      {
        email: 'admin@admin.com',
        password,
        name: 'Admin',
        createdAt,
        updatedAt
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
