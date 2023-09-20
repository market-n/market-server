const { BadRequestError } = require("../../shared/errors");
const User = require("./User");

const DeleteUser = async ({ params }) => {
  let { id } = params;
  let existed = await User.findOne({ _id: id });
  if (!existed) {
    throw new BadRequestError("user not found :< ");
  }
  let deleteUser = await User.findOneAndUpdate(
    { _id: id },
    { is_deleted: true },
  );
  return deleteUser;
};

module.exports = DeleteUser;
