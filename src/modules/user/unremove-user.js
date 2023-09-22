const User = require("./User");

const { NotFoundError } = require("../../shared/errors");

const unremoveUserServices = async ({ params }) => {
  const existing = await User.findOne({ _id: params.id, is_deleted: true });

  if (!existing) {
    throw new NotFoundError("User Not Found!");
  }

  const unremovedAdmin = await User.findByIdAndUpdate(
    { _id: params.id },
    { is_deleted: false },
    { new: true },
  );

  return unremovedAdmin;
};
module.exports = unremoveUserServices;
