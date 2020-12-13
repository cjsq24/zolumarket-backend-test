import Sequelize from 'sequelize';
import sequelize from '../../db.js';

const User = sequelize.define('users', {
	id_user: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
	name: Sequelize.STRING(45),
	last_name: Sequelize.STRING(45),
	username: Sequelize.STRING(45),
	email: { type: Sequelize.STRING(45), unique: true },
	password: Sequelize.STRING(255),
	id_country: { type: Sequelize.INTEGER, references: { model: 'countries', key: 'id_country' } },
	phone_number: { type: Sequelize.STRING(40), unique: true },
	address: Sequelize.STRING(255),
	date: Sequelize.DATE,
	status: { type: Sequelize.BOOLEAN, defaultValue: 1 },
	createdAt: Sequelize.DATE,
	updatedAt: Sequelize.DATE
}, {
	getterMethods: {
		publicData() {
			return {
				id_user: this.id_user,
				name: this.name,
				last_name: this.last_name,
				username: this.username,
				email: this.email,
				id_country: this.id_country,
				phone_number: this.phone_number,
				address: this.address,
				date: this.date
			}
		}
	}
})

export default User;