'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		const createdAt = new Date()
		const updatedAt = new Date()
		await queryInterface.bulkInsert('payment_types', [
			{
				id_payment_type: 1,
				name: 'Efectivo',
				createdAt,
				updatedAt
			},
			{
				id_payment_type: 2,
				name: 'Transferencia/Depósito',
				createdAt,
				updatedAt
			},
			{
				id_payment_type: 3,
				name: 'Tarjeta de Débito',
				createdAt,
				updatedAt
			},
			{
				id_payment_type: 4,
				name: 'Tarjeta de Crédito',
				createdAt,
				updatedAt
			},
			{
				id_payment_type: 5,
				name: 'Paypal',
				createdAt,
				updatedAt
			}
		], {});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('payment_types', null, {});
	}
};