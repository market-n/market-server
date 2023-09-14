const Product = require("./Product");

const listProductServices = async () => {
  return Product.find().populate([
    {
      path: "seller_id",
    },
    {
      path: "market_id",
    },
  ]);
};

module.exports = listProductServices;
