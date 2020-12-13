import Sequelize from 'sequelize';
import sequelize from '../../db.js';

const Provider = sequelize.define('providers', {
	id_provider: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
	name: Sequelize.STRING(50),
	email: { type: Sequelize.STRING(45), unique: true },
	phone_number: { type: Sequelize.STRING(40), unique: true },
	address: Sequelize.STRING(255),
	status: { type: Sequelize.BOOLEAN, defaultValue: 1 },
	createdAt: Sequelize.DATE,
	updatedAt: Sequelize.DATE
})

export default Provider;