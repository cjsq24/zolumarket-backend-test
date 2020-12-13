import Sequelize from 'sequelize';
import sequelize from '../../db.js';

const Payment = sequelize.define('payments', {
	id_payment: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
	reference: { type: Sequelize.STRING(40), unique: true },
	price: Sequelize.DOUBLE,
	id_invoice: { type: Sequelize.INTEGER, references: { model: 'invoices', key: 'id_invoice' } },
	id_user: { type: Sequelize.INTEGER, references: { model: 'users', key: 'id_user' } },
	id_payment_type: { type: Sequelize.INTEGER, references: { model: 'payment_types', key: 'id_payment_type' } },
	id_bank: { type: Sequelize.INTEGER, references: { model: 'banks', key: 'id_bank' } },
	reference_payment: { type: Sequelize.STRING(40), unique: true },
	id_account: Sequelize.STRING(50),
	date: Sequelize.STRING,
	status: { type: Sequelize.BOOLEAN, defaultValue: 1 },
	createdAt: Sequelize.DATE,
	updatedAt: Sequelize.DATE
})

export default Payment;