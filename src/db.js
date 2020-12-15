import Sequelize from 'sequelize';

process.env.DB_USER = 'mZ6jUwPPFw'
process.env.DB_PASSWORD = '4x2JIQietX'
process.env.DB_NAME = 'mZ6jUwPPFw'
process.env.DB_HOST = 'remotemysql.com'

const sequelize = new Sequelize(`mysql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:3306/${process.env.DB_NAME}`)

export default sequelize;

