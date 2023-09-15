const { NotFoundError } = require("../../shared/errors");
const productCategory = require("./ProductCategory");
const editproductCategoryServices = async ({ body, params }) => {
  const existed = await productCategory.findOne({
    _id: params.id,
    is_deleted: false,
  });

  if (!existed) {
    throw new NotFoundError("Product Category Not Found!");
  }

  const editingCategory = {
    name: body.name,
  };

  return productCategory.findByIdAndUpdate(
    { _id: params.id },
    { ...existed._doc, ...editingCategory },
    { new: true },
  );
};

module.exports = editproductCategoryServices;
