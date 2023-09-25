const { body, validationResult } = require("express-validator");
// const { errorValidationResponse } = require("../utils/response.util");

/** validate email to be not empty and validate email format */
exports.emailValidation = () =>
  body("email")
    .notEmpty()
    .withMessage("Email cannot be empty")
    .isEmail()
    .withMessage("Please enter a valid E-mail");

/** validate password that it's not empty   */
exports.passwordValidation = () =>
  body("password").notEmpty().withMessage("Password cannot be empty");

/** check validation result */
exports.customValidateResult = (req) => validationResult(req);
