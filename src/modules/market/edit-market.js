const { NotFoundError } = require("../../shared/errors");
const Market = require("./Market");

const editMarket = async ({ body, params }) => {
  let existed = await Market.findById({ _id: params.id });

  if (!existed) {
    throw new NotFoundError("Market not found!");
  }

  const market = await Market.findOneAndUpdate(
    { _id: params.id },
    { ...existed._doc, ...body },
    { new: true },
  );

  return market;
};
module.exports = editMarket;
