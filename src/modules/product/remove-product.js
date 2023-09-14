const Product = require("./Product");

const { NotFoundError } = require("../../shared/errors");

const removeProductServices = async ({ params }) => {
  const existing = await Product.findOne({ _id: params.id, is_deleted: false });

  if (!existing) {
    throw new NotFoundError("Product Not Found!");
  }

  const removedProduct = await Product.findByIdAndUpdate(
    { _id: params.id },
    { is_deleted: true },
    { new: true },
  );

  return removedProduct;
};
module.exports = removeProductServices;
