const User = require("./User");

const UserList = async () => {
  let all_users = await User.find({});
  return all_users;
};

module.exports = UserList;
