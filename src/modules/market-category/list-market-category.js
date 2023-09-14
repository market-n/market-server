const MarketCategory = require("./MarketCategory");

const ListMarketCategoryServices = async () => {
  return MarketCategory.find().populate([
    {
      path: "admin_id",
      select: "first_name last_name _id role",
    },
  ]);
};
module.exports = ListMarketCategoryServices;
