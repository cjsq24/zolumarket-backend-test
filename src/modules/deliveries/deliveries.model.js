import Sequelize from 'sequelize';
import sequelize from '../../db.js';

const Delivery = sequelize.define('deliveries', {
	id_delivery: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
	reference: { type: Sequelize.STRING(40), unique: true },
	price: Sequelize.DOUBLE,
	id_user: { type: Sequelize.INTEGER, references: { model: 'users', key: 'id_user', } },
	shipping_address: Sequelize.STRING(255),
	courier_address: Sequelize.STRING(255),
	delivery_status: { type: Sequelize.BOOLEAN, defaultValue: 1 },
	status: { type: Sequelize.BOOLEAN, defaultValue: 1 },
	createdAt: Sequelize.DATE,
	updatedAt: Sequelize.DATE
})

export default Delivery;