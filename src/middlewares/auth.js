const jwt = require('jsonwebtoken');
const { AppError } = require('../utils/error');
const errorCodes = require('../constants/errorCodes');
const config = require('../config');

const auth = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    throw new AppError(errorCodes.ACCESS_DENIED, 403);
  }

  try {
    const payload = jwt.verify(token, config.jwtSecret);
    req.userId = payload.id;

    next();
  } catch (ex) {
    throw new AppError(errorCodes.INVALID_TOKEN, 401);
  }
};

module.exports = auth;
