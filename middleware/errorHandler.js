const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  switch (statusCode) {
    case constants.VALIDATION_ERROR:
      res.json({
        title: "Validation failed",
        massage: err.massage,
        stackTrace: err.stack,
      });
      break;
    case constants.NOT_FOUND:
      res.json({
        title: "Not found",
        massage: err.massage,
        stackTrace: err.stack,
      });
    case constants.UNAUTHORIZED:
      res.json({
        title: "Unauthorized",
        massage: err.massage,
        stackTrace: err.stack,
      });
    case constants.FORBIDDEN:
      res.json({
        title: "Forbidden",
        massage: err.massage,
        stackTrace: err.stack,
      });
    case constants.SERVER_ERROR:
      res.json({
        title: "Server error",
        massage: err.massage,
        stackTrace: err.stack,
      });
    default:
      console.log("No error. All good");
      break;
  }
};
module.exports = errorHandler;
