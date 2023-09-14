const { NotFoundError } = require("../../shared/errors");
const Product = require("./Product");

const showProductServices = async ({ params }) => {
  const existed = await Product.findOne({ _id: params.id });

  if (!existed) {
    throw new NotFoundError("Product Not Found");
  }

  return Product.findById({ _id: params.id }).populate([
    {
      path: "seller_id",
    },
    {
      path: "market_id",
    },
  ]);
};

module.exports = showProductServices;
