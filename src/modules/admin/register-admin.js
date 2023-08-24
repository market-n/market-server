const Admin = require("./Admin");

const registerAdmin = async ({ body }) => {
  const admin = await Admin.create(body);
  return admin;
};
module.exports = registerAdmin;
