import Sequelize from 'sequelize';

const sequelize = new Sequelize('npm', 'npm', 'AAAaaa1234', {
	host: '116.62.207.213',

	dialect: 'mysql',

	operatorsAliases: false,

	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000
	}
});

export default sequelize;