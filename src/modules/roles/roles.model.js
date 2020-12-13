import Sequelize from 'sequelize';
import sequelize from '../../db.js';

const Role = sequelize.define('role', {
  name: Sequelize.STRING,
  status: { type: Sequelize.INTEGER, defaultValue: 1 }
})

export default Role;