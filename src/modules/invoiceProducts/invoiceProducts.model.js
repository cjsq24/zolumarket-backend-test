import Sequelize from 'sequelize';
import sequelize from '../../db.js';

const InvoiceProduct = sequelize.define('invoice_products', {
	id_invoice_product: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
	id_invoice: { type: Sequelize.INTEGER, references: { model: 'invoices', key: 'id_invoice' } },
	id_product: { type: Sequelize.INTEGER, references: { model: 'products', key: 'id_product' } },
	quantity: Sequelize.INTEGER,
	price: Sequelize.DOUBLE,
	status: { type: Sequelize.BOOLEAN, defaultValue: 1 },
	createdAt: Sequelize.DATE,
	updatedAt: Sequelize.DATE
})

export default InvoiceProduct;