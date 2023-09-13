const Seller = require("./Seller");

const { NotFoundError } = require("../../shared/errors");

const unremoveSellerServices = async ({ params }) => {
  const existing = await Seller.findOne({ _id: params.id, is_deleted: true });

  if (!existing) {
    throw new NotFoundError("Seller Not Found!");
  }

  const unremovedAdmin = await Seller.findByIdAndUpdate(
    { _id: params.id },
    { is_deleted: false },
    { new: true },
  );

  return unremovedAdmin;
};
module.exports = unremoveSellerServices;
