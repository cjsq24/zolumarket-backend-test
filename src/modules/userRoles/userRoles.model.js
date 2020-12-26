import Sequelize from 'sequelize';
import sequelize from '../../db.js';

const UserRole = sequelize.define('user_roles', {
	id_user_role: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
	id_user: { type: Sequelize.INTEGER, references: { model: 'users', key: 'id_user' } },
	id_role: { type: Sequelize.INTEGER, references: { model: 'roles', key: 'id_role' } }
})

export default UserRole;