'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		const createdAt = new Date()
		const updatedAt = new Date()
		await queryInterface.bulkInsert('providers', [
			{
				id_provider: 1,
				name: 'ZoluMarket',
				createdAt,
				updatedAt
			},
		], {});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('providers', null, {});
	}
};