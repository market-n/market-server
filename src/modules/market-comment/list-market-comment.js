const MarketComment = require("./MarketComment");
const Market = require("../market/Market");
const { NotFoundError } = require("../../shared/errors");

const listMarketCommentServices = async ({ params }) => {

  return MarketComment.find({ market_id: params.id });
};

module.exports = listMarketCommentServices;
