const productCategory = require("./ProductCategory");

const ListproductCategoryServices = async () => {
  return productCategory.find({ is_deleted: false });
};
module.exports = ListproductCategoryServices;
