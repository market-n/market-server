const { BadRequestError } = require("../../shared/errors");
const User = require("./User");

const UnDeleteUser = async ({ params }) => {
  let findUser = await User.findOne({ _id: params.id, is_deleted: true });
  if (!findUser) {
    throw new BadRequestError("user not found ");
  }
  let undelete_user = await User.findOneAndUpdate(
    { _id: params.id },
    { ...findUser._doc, is_deleted: false },
    { new: true },
  );
  return undelete_user;
};

module.exports = UnDeleteUser;
