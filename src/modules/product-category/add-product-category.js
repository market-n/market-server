const productCategory = require("./ProductCategory");
const Market = require("../market/Market");
const { NotFoundError } = require("../../shared/errors");
const AddproductCategoryServices = async ({ body }) => {
  const { name, market_id } = body;
  const existed = await Market.find({ _id: market_id });
  if (!existed) {
    throw new NotFoundError("Market Not Found!");
  }

  const category = {
    name,
    market_id,
  };

  return productCategory.create(category);
};
module.exports = AddproductCategoryServices;
