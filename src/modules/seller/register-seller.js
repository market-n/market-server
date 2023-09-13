const Seller = require("./Seller");
const { BadRequestError } = require("../../shared/errors");
const { hash } = require("bcryptjs");
const registerSellerServices = async ({ body }) => {
  const { email, phone_number, username, password, ...data } = body;
  let existing = await Seller.findOne({ email });

  // Agar Email Topilsa Xato
  if (existing) {
    throw new BadRequestError("Email already existed!");
  }

  existing = await Seller.findOne({ phone_number });

  // Agar Telefon Raqam Topilsa Xato
  if (existing) {
    throw new BadRequestError("Phone Number already existed!");
  }

  existing = await Seller.findOne({ username });

  // Agar Username Topilsa Xato
  if (existing) {
    throw new BadRequestError("Username already existed!");
  }

  const hashedPassword = await hash(password, 10);

  const sellerModel = {
    ...body,
    password: hashedPassword,
  };

  const seller = await Seller.create(sellerModel);
  return seller;
};

module.exports = registerSellerServices;
