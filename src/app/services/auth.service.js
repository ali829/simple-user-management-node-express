const User = require("../models/users.model");
const bcrypt = require("bcrypt");

module.exports = {
  findEmailIsExist: async (email) => {
    const user = await User.findOne().where("email").equals(email);
    return user;
  },
  comparePassword: (password, hashPassword) => {
    return bcrypt.compareSync(password, hashPassword);
  },
};
