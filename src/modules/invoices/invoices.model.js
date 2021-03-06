import Sequelize from 'sequelize';
import sequelize from '../../db.js';

const Invoice = sequelize.define('invoices', {
	id_invoice: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
	reference: { type: Sequelize.STRING(40), unique: true },
	tax: Sequelize.DOUBLE(8,2),
	total_price: Sequelize.DOUBLE(8,2),
	id_user: { type: Sequelize.INTEGER, references: { model: 'users', key: 'id_user', } },
	address: Sequelize.STRING(255),
	transaction_status: { type: Sequelize.BOOLEAN, defaultValue: 1 },
	status: { type: Sequelize.BOOLEAN, defaultValue: 1 },
	createdAt: Sequelize.DATE,
	updatedAt: Sequelize.DATE
})

export default Invoice;