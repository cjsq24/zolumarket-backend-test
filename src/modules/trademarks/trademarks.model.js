import Sequelize from 'sequelize';
import sequelize from '../../db.js';

const Trademark = sequelize.define('trademarks', {
	id_trademark: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
	name: Sequelize.STRING(50),
	status: { type: Sequelize.BOOLEAN, defaultValue: 1 },
	createdAt: Sequelize.DATE,
	updatedAt: Sequelize.DATE
})

export default Trademark;