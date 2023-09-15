const productCategory = require("./ProductCategory");

const { NotFoundError } = require("../../shared/errors");

const removeproductCategoryServices = async ({ params }) => {
  const existing = await productCategory
    .findOne({
      _id: params.id,
      is_deleted: false,
    })
    .populate([
      {
        path: "market_id",
        populate: [
          {
            path: "seller_id",
          },
        ],
      },
    ]);

  if (!existing) {
    throw new NotFoundError("Product Category Not Found!");
  }

  return productCategory.findByIdAndUpdate(
    { _id: params.id },
    { is_deleted: true },
    { new: true },
  );
};
module.exports = removeproductCategoryServices;
