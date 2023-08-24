const Admin = require("./Admin");
const { NotFoundError, ForbiddenError } = require("../../shared/errors");
const loginAdmin = async ({ body }) => {
  const { username, password } = body;

  const existing = await Admin.findOne({ username });

  if (!existing) {
    throw new NotFoundError("Admin Not Found");
  }

};
module.exports = loginAdmin;
