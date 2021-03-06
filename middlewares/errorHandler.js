const { authErr } = require('../constants/constants.js');

module.exports = (err, req, res, next) => {
  const { statusCode = 500, message } = err;

  res
    .status(statusCode)
    .send({
      message: statusCode === 500
        ? authErr
        : message,
    });
  next();
};
