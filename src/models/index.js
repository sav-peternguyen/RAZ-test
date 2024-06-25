const { Sequelize } = require('sequelize');
const config = require('../config');
const User = require('./user');
const Game = require('./game');

const sequelize = new Sequelize(
	config.db.database,
	config.db.username,
	config.db.password, {
  host: config.db.host,
  dialect: config.db.dialect
});

const models = {
  User: User.init(sequelize, Sequelize),
  Game: Game.init(sequelize, Sequelize)
};

Object.values(models).forEach(model => {
  if (model && model.associate) {
    model.associate(models);
  }
});

(async () => {
  await sequelize.sync();
  
  console.log('All models were synchronized successfully.');
})();

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;
