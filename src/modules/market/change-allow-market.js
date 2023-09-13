const { NotFoundError } = require("../../shared/errors");
const Market = require("./Market");

const changeAllow = async ({ params, user }) => {
  console.log(user);
  let existed = await Market.findById({ _id: params.id });
  if (!existed) {
    throw new NotFoundError("not found market :( ");
  }
  let market = await Market.findOneAndUpdate(
    { _id: params.id },
    { ...existed._doc, is_allow: !existed.is_allow, admin_id: user.id },
    { new: true },
  );
  return market;
};

module.exports = changeAllow;
