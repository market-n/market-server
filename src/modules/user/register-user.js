const User = require("./User");
const { BadRequestError } = require("../../shared/errors");
const { hash } = require("bcryptjs");
const registerUserServices = async ({ body }) => {
  const { email, phone_number, username, password, ...data } = body;
  let existing = await User.findOne({ email });

  // Agar Email Topilsa Xato
  if (existing) {
    throw new BadRequestError("This email already existed!");
  }

  existing = await User.findOne({ phone_number });

  // Agar Telefon Raqam Topilsa Xato
  if (existing) {
    throw new BadRequestError("This phone number already existed!");
  }

  existing = await User.findOne({ username });

  // Agar Username Topilsa Xato
  if (existing) {
    throw new BadRequestError("This username already existed!");
  }

  const hashedPassword = await hash(password, 10);

  const userModel = {
    ...body,
    password: hashedPassword,
  };

  const user = await User.create(userModel);
  return user;
};

module.exports = registerUserServices;
