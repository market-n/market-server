const MarketComment = require("./MarketComment");
const Market = require("../market/Market");
const { NotFoundError } = require("../../shared/errors");

const addMarketCommentServices = async ({ body, user }) => {
  const { market_id, comment } = body;

  return MarketComment.create({ ...body, user_id: user.id });
};

module.exports = addMarketCommentServices;
