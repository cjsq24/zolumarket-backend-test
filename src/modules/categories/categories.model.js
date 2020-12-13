import Sequelize from 'sequelize';
import sequelize from '../../db.js';

const Category = sequelize.define('categories', {
	id_category: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
	name: { type: Sequelize.STRING(45), unique: true },
	status: { type: Sequelize.BOOLEAN, defaultValue: 1 },
	createdAt: Sequelize.DATE,
	updatedAt: Sequelize.DATE
})

export default Category;