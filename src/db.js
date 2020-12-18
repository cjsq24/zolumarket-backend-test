import Sequelize from 'sequelize';

console.log('User: ' + process.env.DB_USER + ' Password: ' + process.env.DB_PASSWORD + ' NAME: ' + process.env.DB_NAME + ' HOST: ' + process.env.DB_HOST)

const sequelize = new Sequelize(`mysql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:3306/${process.env.DB_NAME}`)

export default sequelize;

