const Admin = require("./Admin");
const { NotFoundError, ForbiddenError } = require("../../shared/errors");
const { compareSync } = require("bcryptjs");
const loginAdmin = async ({ body }) => {
  const { username, password } = body;

  const existing = await Admin.findOne({ username, is_deleted: false });

  if (!existing) {
    throw new NotFoundError("Admin Not Found");
  }

  const is_correct = compareSync(password, existing.password);

  if (!is_correct) {
    throw new ForbiddenError("Password Incorrect!");
  }

};
module.exports = loginAdmin;
