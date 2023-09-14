const { NotFoundError } = require("../../shared/errors");
const Product = require("./Product");

const editProductServices = async ({ body, params }) => {
  // const { category_id, ...data } = body;
  const { ...data } = body;

  const existed = await Product.findOne({ _id: params.id, is_deleted: false });
  if (!existed) {
    throw new NotFoundError("Product Not Found!");
  }

  // const existedCategory = await Product.findOne({ category_id });
  // if(!existedCategory){
  //   throw new NotFoundError("Category Not Found!")
  // }

  return Product.findByIdAndUpdate(
    { _id: params.id },
    { ...existed._doc, ...data },
    { new: true },
  );
};

module.exports = editProductServices;
