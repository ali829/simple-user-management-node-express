const jwt = require("jsonwebtoken");
const { tokenSecret } = require("../configs/app.config");
const { MAX_AGE } = require("../configs/constants.config");

module.exports = {
  createToken: (payload) => {
    return jwt.sign({ payload }, tokenSecret, { expiresIn: MAX_AGE });
  },
  setJwtCookie: (res, token) => {
    res.cookie("jwt", token, { maxAge: MAX_AGE });
  },
};
