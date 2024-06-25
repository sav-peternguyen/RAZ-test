const gameRepository = require('../repositories/gameRepository');
const { AppError } = require('../utils/error');
const { errorCodes } = require('../constants/errorCodes');

const gameService = {
  async get(id) {
    const game = await gameRepository.getByField('id', id);

    if (!game) {
      throw new AppError(errorCodes.GAME_NOT_FOUND, 404);
    }

    return game.toJSON();
  },

  async create(gameData) {
    return await gameRepository.create(gameData);
  },

  async update(id, gameData) {
    const game = await gameRepository.update(id, gameData);

    if (!game) {
      throw new AppError(errorCodes.GAME_NOT_FOUND, 404);
    }
    return game;
  },

  async delete(id) {
    const game = await gameRepository.delete(id);

    if (!game) {
      throw new AppError(errorCodes.GAME_NOT_FOUND, 404);
    }

    return game;
  },
  
  async getAllGames() {
    return await gameRepository.getAll();
  }
};

module.exports = gameService;
