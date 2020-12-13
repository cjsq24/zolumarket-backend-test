'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		const createdAt = new Date()
		const updatedAt = new Date()
		await queryInterface.bulkInsert('units', [
			{
				id_unit: 1,
				name: 'Gramos',
				abbreviation: 'gr',
				createdAt,
				updatedAt
			},
			{
				id_unit: 2,
				name: 'Libras',
				abbreviation: 'lb',
				createdAt,
				updatedAt
			},
		], {});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('units', null, {});
	}
};