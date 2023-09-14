const Product = require("./Product");

const listProductServices = async () => {
  return Product.find();
};

module.exports = listProductServices;
