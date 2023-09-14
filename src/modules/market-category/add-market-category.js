const MarketCategory = require("./MarketCategory");

const AddMarketCategoryServices = async ({ body, user }) => {
  const { name } = body;
  const category = {
    name,
    admin_id: user.id,
  };

  return MarketCategory.create(category);
};
module.exports = AddMarketCategoryServices;
