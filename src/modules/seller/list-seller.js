const Seller = require("./Seller");

const listSellerServices = async () => {
  const Sellers_list = await Seller.find({ is_deleted: false });

  return Sellers_list;
};
module.exports = listSellerServices;
