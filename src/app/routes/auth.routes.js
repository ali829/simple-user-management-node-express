const { Router } = require("express");
const router = Router();

/** list of authentication controllers */
const { authenticateUser } = require("../controllers/auth.controller");

/** validations */
const {
  emailValidation,
  passwordValidation,
} = require("../validations/auth.validation");

/** * List of validation middleware functions to be applied to the "/login" route
 * before invoking the authenticateUser controller. */
const validationList = [emailValidation(), passwordValidation()];

router
.post("/login", [...validationList], authenticateUser);

module.exports = router;
