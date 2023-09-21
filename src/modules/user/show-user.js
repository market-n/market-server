const User = require("./User");

const { NotFoundError } = require("../../shared/errors");

const showUserServices = async ({ params }) => {
  const existing = await User.findOne({ _id: params.id, is_deleted: false });

  if (!existing) {
    throw new NotFoundError("User Not Found!");
  }

  return existing;
};
module.exports = showUserServices;
