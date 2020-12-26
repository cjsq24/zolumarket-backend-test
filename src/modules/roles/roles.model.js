import Sequelize from 'sequelize';
import sequelize from '../../db.js';

const Role = sequelize.define('roles', {
	id_role: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
	name: { type: Sequelize.STRING(50), unique: true },
	status: { type: Sequelize.INTEGER, defaultValue: 1 }
})

export default Role;