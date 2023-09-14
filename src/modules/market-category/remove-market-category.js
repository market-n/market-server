const MarketCategory = require("./MarketCategory");

const { NotFoundError } = require("../../shared/errors");

const removeMarketCategoryServices = async ({ user, params }) => {
  const existing = await MarketCategory.findOne({
    _id: params.id,
    is_deleted: false,
  });

  if (!existing) {
    throw new NotFoundError("MarketCategory Not Found!");
  }

  return MarketCategory.findByIdAndUpdate(
    { _id: params.id },
    { is_deleted: true, admin_id: user.id },
    { new: true },
  );
};
module.exports = removeMarketCategoryServices;
