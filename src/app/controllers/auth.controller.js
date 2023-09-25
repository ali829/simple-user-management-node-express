const { customValidateResult } = require("../validations/auth.validation");

exports.authenticateUser = (req, res) => {
  const { email, password } = req.body;
  customValidateResult(req, res);
  res.json({ email, password });
};
