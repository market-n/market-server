const { BadRequestError } = require("../../shared/errors");
const Admin = require("./Admin");
const { hashSync } = require("bcryptjs");

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

  const hashedPassword = hashSync(password, 10);

  return admin;
};
module.exports = registerAdmin;
