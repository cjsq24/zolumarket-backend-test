import Sequelize from 'sequelize';
import sequelize from '../../db.js';

const Country = sequelize.define('countries', {
	id_country: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
	name: Sequelize.STRING(50),
	iso2: Sequelize.STRING(2),
	iso3: Sequelize.STRING(3),
	code: Sequelize.STRING(10),
	status: { type: Sequelize.BOOLEAN, defaultValue: 1 },
	createdAt: Sequelize.DATE,
	updatedAt: Sequelize.DATE
}, {
	charset: 'utf8',
	collate: 'utf8_unicode_ci'
})

export default Country;