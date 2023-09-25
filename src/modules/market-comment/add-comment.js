const MarketComment = require("./MarketComment");
const Market = require("../market/Market");
const { NotFoundError } = require("../../shared/errors");

const addMarketCommentServices = async ({ body, user }) => {
  const { market_id, comment } = body;

  const existingMarket = await Market.findById({ _id: market_id });

  if (!existingMarket) {
    throw new NotFoundError("Market Not Found!");
  }

  return MarketComment.create({ ...body, user_id: user.id });
};

module.exports = addMarketCommentServices;
