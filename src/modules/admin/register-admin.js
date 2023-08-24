const Admin = require("./Admin");

const registerAdmin = async ({ body }) => {
  const admin = await Admin.create(body);
  const { username, password, ...data } = body;

  const existed = await Admin.findOne({ username });

  if (existed) {
    throw new BadRequestError("This username already existed!");
  }

  if (body.role && body.role != "admin") {
    console.log(body.role);
    console.log(body.role != "admin");
    throw new BadRequestError("This role Not Found!");
  }
  return admin;
};
module.exports = registerAdmin;
