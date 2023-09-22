const User = require("./User");

const { NotFoundError } = require("../../shared/errors");

const removeUserServices = async ({ params }) => {
  const existing = await User.findOne({ _id: params.id, is_deleted: false });

  if (!existing) {
    throw new NotFoundError("User Not Found!");
  }

  const removedUser = await User.findByIdAndUpdate(
    { _id: params.id },
    { is_deleted: true },
    { new: true },
  );

  return removedUser;
};
module.exports = removeUserServices;
