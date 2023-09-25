const MarketComment = require("./MarketComment");
const Market = require("../market/Market");
const { NotFoundError } = require("../../shared/errors");

const listMarketCommentServices = async ({ params }) => {
  const existingMarket = await Market.findById({ _id: params.id });

  if (!existingMarket) {
    throw new NotFoundError("Market Not Found!");
  }

  return MarketComment.find({ market_id: params.id });
};

module.exports = listMarketCommentServices;
