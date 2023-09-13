const { compare } = require("bcryptjs");
const { NotFoundError, ForbiddenError } = require("../../shared/errors");
const Seller = require("./Seller");
const jwt = require("jsonwebtoken");
const config = require("../../shared/config");

const loginSellerServices = async ({ body }) => {
  const { username, password } = body;

  const existing = await Seller.findOne({ username, is_deleted: false });

  if (!existing) {
    throw new NotFoundError("Seller Not Found");
  }

  const is_correct = await compare(password, existing.password);

  if (!is_correct) {
    throw new ForbiddenError("Password Incorrect!");
  }

  if (!existing.is_allow) {
    throw new ForbiddenError("Not verified by Admin!");
  }

  let decode = {
    id: existing.id,
    role: "seller",
  };

  const token = jwt.sign({ user: decode }, config.jwt.secret, {
    expiresIn: config.jwt.expirec_in,
  });

  return token;
};

module.exports = loginSellerServices;
