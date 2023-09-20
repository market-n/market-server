const { NotFoundError } = require("../../shared/errors");
const User = require("./User");

const changeAllowUser = async ({ params, user }) => {
  let existed = await User.findById({ _id: params.id });
  if (!existed) {
    throw new NotFoundError("not found User :( ");
  }
  let Users = await User.findOneAndUpdate(
    { _id: params.id },
    { ...existed._doc, is_allow: !existed.is_allow, admin_id: user.id },
    { new: true },
  );
  return Users;
};

module.exports = changeAllowUser;
