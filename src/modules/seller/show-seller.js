const Seller = require("./Seller");

const { NotFoundError } = require("../../shared/errors");

const showSellerServices = async ({ params }) => {
  const existing = await Seller.findOne({ _id: params.id, is_deleted: false });

  if (!existing) {
    throw new NotFoundError("Seller Not Found!");
  }

  return existing;
};
module.exports = showSellerServices;
