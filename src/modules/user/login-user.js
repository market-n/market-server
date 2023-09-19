const { compare } = require("bcryptjs");
const { NotFoundError, ForbiddenError } = require("../../shared/errors");
const User = require("./User");
const jwt = require("jsonwebtoken");
const config = require("../../shared/config");

const loginUserService = async ({ body }) => {
  const { username, password } = body;

  const existing = await User.findOne({ username, is_deleted: false });

  if (!existing) {
    throw new NotFoundError("User Not Found");
  }

  const is_correct = await compare(password, existing.password);

  if (!is_correct) {
    throw new ForbiddenError("Password Incorrect!");
  }

  let decode = {
    id: existing.id,
    role: "user",
  };

  const token = jwt.sign({ user: decode }, config.jwt.secret, {
    expiresIn: config.jwt.expirec_in,
  });

  return token;
};
module.exports = loginUserService;
