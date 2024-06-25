const jwt = require('jsonwebtoken');
const userRepository = require('../repositories/userRepository');
const config = require('../config');
const { AppError } = require('../utils/error');
const { removePassword } = require('../utils/response');
const errorCodes = require('../constants/errorCodes');

const userService = {
  async login(email, password) {
    const user = await userRepository.getByField('email', email);


    if (!user) {
        throw new AppError(errorCodes.USER_NOT_FOUND);
    }

    const isValid = await user.validatePassword(password, user.password);

    if (!isValid) {
        throw new AppError(errorCodes.AUTH_INVALID_CREDENTIALS, 401);
    }

    const token = jwt.sign({ id: user.id }, config.jwtSecret, { expiresIn: '1h' });

    return { user: removePassword(user.toJSON()), token };
  },

  async get(id) {
    const user = await userRepository.getByField('id', id);

    if (!user) {
      throw new AppError(errorCodes.USER_NOT_FOUND, 404);
    }

    return removePassword(user.toJSON());
  },

  async create(userData) {
    return await userRepository.create(userData);
  },

  async update(id, userData) {
    const user = await userRepository.update(id, userData);

    if (!user) {
      throw new AppError(errorCodes.USER_NOT_FOUND, 404);
    }

    return user;
  },
  async delete(id) {
    const user = await userRepository.delete(id);

    if (!user) {
      throw new AppError(errorCodes.USER_NOT_FOUND, 404);
    }

    return user;
  },

  async getAll() {
    const users = await userRepository.getAll();

    return removePassword(users);
  }

};

module.exports = userService;
