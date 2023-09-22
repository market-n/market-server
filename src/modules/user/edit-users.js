const User = require("./User");

const edit_user = async function ({ params, body }) {
  let existed = await User.findById({ _id: params.id });
  if (!existed) {
    return {
      status: 404,
      message: "User not found",
    };
  }
  let updated = await User.findByIdAndUpdate(
    { _id: params.id },
    { ...existed._doc, ...body },
    { new: true },
  );
  return updated;
};
module.exports = edit_user;
