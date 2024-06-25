const Game = require('../models/game');

const gameRepository = {
  async getByField(field, value) {
    return await Game.findOne({ where: { [field]: value } });
  },

  async create(GameData) {
    return await Game.create(GameData);
  },

  async update(id, GameData) {
    const Game = await Game.findByPk(id);

    if (Game) {
      return await Game.update(GameData);
    }

    return null;
  },
  
  async delete(id) {
    const Game = await Game.findByPk(id);

    if (Game) {
      await Game.destroy();

      return Game;
    }

    return null;
  },

  async getAll() {
    return await Game.findAll();
  }
};

module.exports = gameRepository;
