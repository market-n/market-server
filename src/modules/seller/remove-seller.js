const Seller = require("./Seller");

const { NotFoundError } = require("../../shared/errors");

const removeSellerServices = async ({ params }) => {
  const existing = await Seller.findOne({ _id: params.id, is_deleted: false });

  if (!existing) {
    throw new NotFoundError("Seller Not Found!");
  }

  const removedSeller = await Seller.findByIdAndUpdate(
    { _id: params.id },
    { is_deleted: true },
    { new: true },
  );

  return removedSeller;
};
module.exports = removeSellerServices;
