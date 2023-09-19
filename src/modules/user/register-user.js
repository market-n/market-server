const User = require("./User");
const { BadRequestError } = require("../../shared/errors");
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

  const user = await User.create(userModel);
  return user;
};

module.exports = registerUserServices;
