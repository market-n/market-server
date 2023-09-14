const MarketCategory = require("./MarketCategory");

const { NotFoundError } = require("../../shared/errors");

const unremoveMarketCategoryServices = async ({ params, user }) => {
  const existing = await MarketCategory.findOne({
    _id: params.id,
    is_deleted: true,
  });

  if (!existing) {
    throw new NotFoundError("MarketCategory Not Found!");
  }

  const unremovedMarketCategory = await MarketCategory.findByIdAndUpdate(
    { _id: params.id },
    { is_deleted: false, admin_id: user.id },
    { new: true },
  );

  return unremovedMarketCategory;
};
module.exports = unremoveMarketCategoryServices;
