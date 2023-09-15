const { NotFoundError } = require("../../shared/errors");
const productCategory = require("../product-category/ProductCategory");
const Product = require("./Product");

const editProductServices = async ({ body, params }) => {
  const { ...data } = body;

  const existed = await Product.findOne({ _id: params.id, is_deleted: false });
  if (!existed) {
    throw new NotFoundError("Product Not Found!");
  }

  if (body.category_id) {
    const existedCategory = await productCategory.findOne({
      _id: body.category_id,
    });
    if (!existedCategory) {
      throw new NotFoundError("Category Not Found!");
    }
  }

  return Product.findByIdAndUpdate(
    { _id: params.id },
    { ...existed._doc, ...body },
    { new: true },
  );
};

module.exports = editProductServices;
