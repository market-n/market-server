const { NotFoundError } = require("../../shared/errors");
const Market = require("./Market");

const RemoveMarket = async ({ params }) => {
  let existed = await Market.findById({ _id: params.id, is_deleted: false });
  if (!existed) {
    throw new NotFoundError("not found market :( ");
  }
  let market = await Market.findOneAndUpdate(
    { _id: params.id },
    { ...existed._doc, is_deleted: true },
    { new: true },
  );
  return market;
};

module.exports = RemoveMarket;
