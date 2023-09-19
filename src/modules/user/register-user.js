const User = require("./User");
const registerUserServices = async ({ body }) => {
  const { email, phone_number, username, password, ...data } = body;
  let existing = await User.findOne({ email });

  // Agar Email Topilsa Xato
  if (existing) {
    throw new BadRequestError("This email already existed!");
  }

  const user = await User.create(userModel);
  return user;
};

module.exports = registerUserServices;
