const productCategory = require("./ProductCategory");

const { NotFoundError } = require("../../shared/errors");

const unremoveproductCategoryServices = async ({ params, user }) => {
  const existing = await productCategory.findOne({
    _id: params.id,
    is_deleted: true,
  });

  if (!existing) {
    throw new NotFoundError("productCategory Not Found!");
  }

  const unremovedproductCategory = await productCategory.findByIdAndUpdate(
    { _id: params.id },
    { is_deleted: false, admin_id: user.id },
    { new: true },
  );

  return unremovedproductCategory;
};
module.exports = unremoveproductCategoryServices;
