'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		const createdAt = new Date()
		const updatedAt = new Date()
		await queryInterface.bulkInsert('categories', [
			{
				id_category: 1,
				name: 'Frutas y Verduras',
				createdAt,
				updatedAt
			},
			{
				id_category: 2,
				name: 'Empaquetados',
				createdAt,
				updatedAt
			},
			{
				id_category: 3,
				name: 'Carnes',
				createdAt,
				updatedAt
			}
		], {});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('categories', null, {});
	}
};
