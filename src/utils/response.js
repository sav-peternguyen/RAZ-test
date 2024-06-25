const _ = require('lodash');

const success = (res, data, statusCode = 200) => {
  res.status(statusCode).json({
    success: true,
    data
  });
};

const error = (res, message, statusCode = 400, errorCode = 'INTERNAL_SERVER_ERROR') => {
  res.status(statusCode).json({
    success: false,
    message,
    errorCode,
    status: statusCode
  });
};

const removePassword = (user) => {
  if (_.isArray(user)) {
    return _.reduce(user, (data, item) => {
      data.push(_.omit(item.toJSON(), ['password']));
      return data;
    }, [])
  }

  return _.omit(user, ['password']);
}

module.exports = {
  success,
  error,
  removePassword
};
