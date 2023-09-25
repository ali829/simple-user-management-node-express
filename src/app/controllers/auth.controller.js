const { customValidateResult } = require("../validations/auth.validation");
const {
  findEmailIsExist,
  comparePassword,
} = require("../services/auth.service");
const {
  successResponse,
  errorResponse,
  errorValidationResponse,
} = require("../utils/response.util");
const { createToken, setJwtCookie } = require("../utils/jwt.util");
const { use } = require("..");

exports.authenticateUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const results = customValidateResult(req);
    if (!results.isEmpty()) {
      return errorValidationResponse(res, 400, results.array());
    }
    const user = await findEmailIsExist(email);
    if (!user) {
      return errorResponse(res, 404, "Email doesn't exist");
    }
    if (!comparePassword(password, user.password)) {
      return errorResponse(res, 401, "Incorrect password");
    }
    const token = createToken(user._id);
    setJwtCookie(res, token);
    successResponse(res, 200, "Login successful", { token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
