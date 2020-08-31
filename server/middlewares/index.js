//Not found error for global use
function notFound(req, res, next) {
  const error = new Error("Not Found", req.originalUrl);
  res.status(404);
  next(error);
}
//Error handler function
function errorHandler(error, req, res, next) {
  res.status(res.statusCode || 500);
  res.json({
    message: error.message,
    error: process.env.NODE_ENV === "production" ? {} : error.stack,
  });
}
//Exporting the two functions
module.exports = {
  notFound,
  errorHandler,
};
