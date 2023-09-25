const User = require("./User");

const { NotFoundError, BadRequestError } = require("../../shared/errors");

const editUserServices = async ({ params, body }) => {
  const existing = await User.findOne({ _id: params.id, is_deleted: false });

  if (!existing) {
    throw new NotFoundError("User Not Found!");
  }

  const existedUsername = await User.findOne({ username: body.username });

  if (existedUsername && existing.username != body.username) {
    throw new BadRequestError("This username already existed!");
  }

  const existedNumber = await User.findOne({
    phone_number: body.phone_number,
  });

  if (existedNumber && existing.phone_number != body.phone_number) {
    throw new BadRequestError("This phone number already existed!");
  }

  const existedEmail = await User.findOne({ email: body.email });

  if (existedEmail && existing.email != body.email) {
    throw new BadRequestError("This email already existed!");
  }

  const editedUser = await User.findByIdAndUpdate(
    { _id: params.id },
    { ...existing._doc, ...body },
    {
      new: true,
    },
  );

  return editedUser;
};
module.exports = editUserServices;
