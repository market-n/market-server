const User = require("./User");

const listUserServices = async () => {
  const User_list = await User.find({ is_deleted: false });

  return User_list;
};
module.exports = listUserServices;
