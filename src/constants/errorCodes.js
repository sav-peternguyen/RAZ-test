const errorCodes = {
  AUTH_INVALID_CREDENTIALS: {
    errorCode: 'AUTH_INVALID_CREDENTIALS',
    message: 'Invalid email or password'
  },
  USER_NOT_FOUND: {
    errorCode: 'USER_NOT_FOUND',
    message: 'User not found'
  },
  GAME_NOT_FOUND: {
    errorCode: 'GAME_NOT_FOUND',
    message: 'Game not found'
  },
  INVALID_TOKEN: {
    errorCode: 'INVALID_TOKEN',
    message: 'Invalid token'
  },
  ACCESS_DENIED: {
    errorCode: 'ACCESS_DENIED',
    message: 'Access denied. No token provided.'
  },
  INTERNAL_SERVER_ERROR: {
    errorCode: 'INTERNAL_SERVER_ERROR',
    message: 'An unexpected error occurred'
  }
};

module.exports = errorCodes;
