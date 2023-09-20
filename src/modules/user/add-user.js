const User = require("./User");
const { BadRequestError } = require("../../shared/errors");
const { hashSync } = require("bcryptjs");

const addUser = async ({ body }) => {
  let { email, phone_number, username, password, ...data } = body;

  let exsited = await User.findOne({
    username,
    phone_number,
    email,
    is_deleted: false,
  });
  if (exsited) {
    throw new BadRequestError("user already exsisted");
  }

  let create_user = await User.create({
    ...data,
    email,
    password: hashSync(password, 10),
    phone_number,
    username,
  });

  return create_user;
};
module.exports = addUser;
