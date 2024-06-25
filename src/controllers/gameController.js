const gameService = require('../services/gameService');
const { success } = require('../utils/response');

const gameController = {
  get: async (req, res, next) => {
    const id = req.params.id;
    const game = await gameService.get(id);

    return success(res, game);
  },

  list: async (req, res, next) => {
    const games = await gameService.getAll();

    return success(res, games);
  },

  create: async (req, res, next) => {
    const params = req.body;
    const game = await gameService.create(params);

    return success(res, game);
  },

  update: async (req, res, next) => {
    const id = req.params.id;
    const params = req.body;
    const game = await gameService.update(id, params);

    return success(res, game);
  },

  delete: async (req, res, next) => {
    const id = req.params.id;
    const game = await gameService.delete(id);

    return success(res, game);
  }
};

module.exports = gameController;
