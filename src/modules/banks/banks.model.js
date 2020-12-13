import Sequelize from 'sequelize';
import sequelize from '../../db.js';

const Bank = sequelize.define('banks', {
	id_bank: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
	name: { type: Sequelize.STRING(50), unique: true },
	status: { type: Sequelize.BOOLEAN, defaultValue: 1 },
	createdAt: Sequelize.DATE,
	updatedAt: Sequelize.DATE
})

export default Bank;