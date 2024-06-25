const errorCodes = require('../constants/errorCodes');

class AppError extends Error {
  constructor({message, errorCode}, status) {
    super(message);
    this.errorCode = errorCode;
    this.status = status;
  }
}

function errorHandler(err, req, res, next) {
  const statusCode = err.status || 500;
  const errorCode = err.errorCode || errorCodes.INTERNAL_SERVER_ERROR.errorCode;
  const message = err.message || errorCodes.INTERNAL_SERVER_ERROR.message;

  res.status(statusCode).json({
    success: false,
    message,
    errorCode,
    status: statusCode
  });
}

module.exports = {
	AppError,
	errorHandler
};
