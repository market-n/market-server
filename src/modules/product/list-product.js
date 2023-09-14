const Product = require("./Product");

const listProductServices = async () => {
  return Product.find({ is_deleted: true });
};

module.exports = listProductServices;
