const Admin = require("./Admin");

const { NotFoundError } = require("../../shared/errors");

const unremoveAdmin = async ({ params }) => {
  const existing = await Admin.findOne({ _id: params.id, is_deleted: true });

  if (!existing) {
    throw new NotFoundError("Removed admin Not Found!");
  }

};
module.exports = unremoveAdmin;