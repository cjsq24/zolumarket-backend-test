import Sequelize from 'sequelize';
import sequelize from '../../db.js';

const Unit = sequelize.define('units', {
	id_unit: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
	name: { type: Sequelize.STRING(45), unique: true },
	abbreviation: Sequelize.STRING(5),
	status: { type: Sequelize.BOOLEAN, defaultValue: 1 },
	createdAt: Sequelize.DATE,
	updatedAt: Sequelize.DATE
})

export default Unit;