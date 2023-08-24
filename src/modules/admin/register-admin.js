const Admin = require("./Admin");

const registerAdmin = async ({ body }) => {
  const admin = await Admin.create(body);
  const { username, password, ...data } = body;

  const existed = await Admin.findOne({ username });

  if (existed) {
    throw new BadRequestError("This username already existed!");
  }
  return admin;
};
module.exports = registerAdmin;
