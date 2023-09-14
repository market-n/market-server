const { NotFoundError } = require("../../shared/errors");
const MarketCategory = require("./MarketCategory");
const editMarketCategoryServices = async ({ body, user, params }) => {
  const existed = await MarketCategory.findOne({
    _id: params.id,
    is_deleted: false,
  });

  if (!existed) {
    throw new NotFoundError("Market Category Not Found!");
  }

  const editingCategory = {
    name: body.name,
    admin_id: user.id,
  };

  return MarketCategory.findByIdAndUpdate(
    { _id: params.id },
    { ...existed._doc, ...body },
    { new: true },
  );
};

module.exports = editMarketCategoryServices;
