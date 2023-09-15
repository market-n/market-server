const Product = require("./Product");
const Market = require("../market/Market");
const ProductCategory = require("../product-category/ProductCategory");
const { NotFoundError } = require("../../shared/errors");

const addProductServices = async ({ body, user }) => {
  const { market_id, category_id, ...data } = body;

  const existingMarket = await Market.findOne({ _id: market_id });

  if (!existingMarket) {
    throw new NotFoundError("Market Not Found!");
  }

  const existingProductCategory = await ProductCategory.findOne({
    _id: category_id,
  });

  if (!existingProductCategory) {
    throw new NotFoundError("Product Category Not Found!");
  }

  return Product.create({ market_id, category_id, ...data });
};

module.exports = addProductServices;
