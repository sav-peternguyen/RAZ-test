const userService = require('../services/userService');
const { success } = require('../utils/response');

const userController = {
  get: async (req, res, next) => {
    const id = req.params.id;
    const user = await userService.get();

    return success(res, user);
  },

  getAll: async (req, res, next) => {
    const users = await userService.getAll();

    return success(res, users);
  },

  create: async (req, res, next) => {
    const params = req.body;
    const user = await userService.create(params);

    return success(res, user, 201);
  },

  update: async (req, res, next) => {
    const id = req.params.id;
    const params = req.body;
    const user = await userService.update(req.params.id, req.body);

    return success(res, user);
  },

  delete: async (req, res, next) => {
    const id = req.params.id;
    const user = await userService.delete(id);

    return success(res, user);
  }
};

module.exports = userController;
