const Product = require("./Product");

const { NotFoundError } = require("../../shared/errors");

const unremoveProductServices = async ({ params }) => {
  const existing = await Product.findOne({ _id: params.id, is_deleted: true });

  if (!existing) {
    throw new NotFoundError("Product Not Found!");
  }

  const unremovedProduct = await Product.findByIdAndUpdate(
    { _id: params.id },
    { is_deleted: false },
    { new: true },
  );

  return unremovedProduct;
};
module.exports = unremoveProductServices;
