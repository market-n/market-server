const Market = require("./Market");

const listMarket = async () => {
  let market_list = await Market.find({ is_deleted: false });
  return market_list;
};

module.exports = listMarket;
