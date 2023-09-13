const { NotFoundError } = require("../../shared/errors");
const Market = require("./Market");

const UnremoveMarket = async ({ params }) => {
  let existed = await Market.findById({ _id: params.id, is_deleted: true });
  if (!existed) {
    throw new NotFoundError("not found market :( ");
  }
  let market = await Market.findOneAndUpdate(
    { _id: params.id },
    { ...existed._doc, is_deleted: false },
    { new: true },
  );
  return market;
};

module.exports = UnremoveMarket;
