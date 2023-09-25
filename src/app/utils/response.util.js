module.exports = {
  successResponse: (res, statusCode, message, data) => {
    res.status(statusCode).json({ statusCode, data, message });
  },
  errorResponse: (res, statusCode, message) => {
    res.status(statusCode).json({ message, statusCode });
  },
    errorValidationResponse: (res, statusCode, errors) => {
      return res.status(statusCode).json({ errors });
    },
};
