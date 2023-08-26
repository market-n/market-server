const Admin = require("./Admin");

const { NotFoundError } = require("../../shared/errors");

const deleteAdmin = async ({ params }) => {
  const existing = await Admin.findOne({ _id: params.id, is_deleted: false });

  if (!existing) {
    throw new NotFoundError("Admin Not Found!");
  }

};
module.exports = deleteAdmin;
