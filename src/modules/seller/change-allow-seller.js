const { NotFoundError } = require("../../shared/errors");
const Seller = require("./Seller");

const changeAllowSellerServices = async ({ user, params }) => {
  const existed = await Seller.findOne({ _id: params.id });

  if (!existed) {
    throw new NotFoundError("Seller Not Found");
  }

  const allowing = {
    admin_id: user.id,
    is_allow: !existed.is_allow,
  };

  return Seller.findByIdAndUpdate(
    { _id: params.id },
    { ...existed._doc, ...allowing },
    { new: true },
  );
};

module.exports = changeAllowSellerServices;
