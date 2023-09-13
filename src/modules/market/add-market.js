const { BadRequestError } = require("../../shared/errors");
const Market = require("./Market");

const addMarket = async ({ body, user }) => {
  let { name, ...data } = body;
  let existed = await Market.findOne({ name });

  if (existed) {
    throw new BadRequestError("This username already existed!");
  }

  const market = await Market.create({
    ...data,
    seller_id: user.id,
    name,
  });

  return market;
};
module.exports = addMarket;
