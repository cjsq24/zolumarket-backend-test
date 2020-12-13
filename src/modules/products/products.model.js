import Sequelize from 'sequelize';
import sequelize from '../../db.js';

const Product = sequelize.define('products', {
	id_product: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
	reference: { type: Sequelize.STRING(40), unique: true },
	name: Sequelize.STRING(50),
	price: Sequelize.DOUBLE,
	id_category: { type: Sequelize.INTEGER, references: { model: 'categories', key: 'id_category' } },
	id_unit: { type: Sequelize.INTEGER, references: { model: 'units', key: 'id_unit' } },
	//id_trademark: { type: Sequelize.INTEGER, references: { model: 'trademarks', key: 'id_trademark' } },
	id_provider: { type: Sequelize.INTEGER, references: { model: 'providers', key: 'id_provider' } },
	id_shop: { type: Sequelize.INTEGER, references: { model: 'shops', key: 'id_shop' } },
	picture: Sequelize.STRING(200),
	description: Sequelize.STRING(255),
	status: { type: Sequelize.BOOLEAN, defaultValue: 1 },
	createdAt: Sequelize.DATE,
	updatedAt: Sequelize.DATE
})

export default Product;