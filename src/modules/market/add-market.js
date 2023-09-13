const { BadRequestError } = require("../../shared/errors");
const Market = require("./Market");

const addMarket = async ({ body }) => {
  let { name, ...data } = body;

  let existed = await Market.findOne({ name });

  if (existed) {
    throw new BadRequestError("This username already existed!");
  }

  const market = await Market.create({
    ...data,
    name,
  });

  return market;
};
module.exports = addMarket;
