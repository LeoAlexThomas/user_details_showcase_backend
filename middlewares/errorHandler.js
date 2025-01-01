const { constants } = require("../constants");

const errorHandler = (error, req, res, next) => {
  switch (res.statusCode) {
    case constants.NOT_FOUND:
      res.json({
        title: "Not Found",
        message: error.message,
        stackTrace: error.stack,
      });
      break;
    case constants.FORBIDDEN:
      res.json({
        title: "Forbidden",
        message: error.message,
        stackTrace: error.stack,
      });
      break;
    case constants.VALIDATION_ERROR:
      res.json({
        title: "Validation Error",
        message: error.message,
        stackTrace: error.stack,
      });
      break;
    case constants.INTERNAL_SERVER_ERROR:
      res.json({
        title: "Internal Server Error",
        message: error.message,
        stackTrace: error.stack,
      });
      break;
    default:
      break;
  }
  res.json({
    message: error.message,
    stackTrace: error.stack,
  });
};

module.exports = errorHandler;
