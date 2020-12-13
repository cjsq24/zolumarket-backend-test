import Sequelize from 'sequelize';
import sequelize from '../../db.js';

const Location = sequelize.define('locations', {
	id_location: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
	id_user: { type: Sequelize.INTEGER, references: { model: 'users', key: 'id_user' } },
	name: { type: Sequelize.STRING(50), unique: true },
	latitude: Sequelize.STRING(50),
	latitude_delta: Sequelize.STRING(50),
	longitude: Sequelize.STRING(50),
	longitude_delta: Sequelize.STRING(50),
	favorite: { type: Sequelize.BOOLEAN, defaultValue: 0 },
	status: { type: Sequelize.BOOLEAN, defaultValue: 1 },
	createdAt: Sequelize.DATE,
	updatedAt: Sequelize.DATE
})

export default Location;