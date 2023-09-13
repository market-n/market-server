const Seller = require("./Seller");

const { NotFoundError, BadRequestError } = require("../../shared/errors");

const editSellerServices = async ({ params, body }) => {
  const existing = await Seller.findOne({ _id: params.id, is_deleted: false });

  if (!existing) {
    throw new NotFoundError("Seller Not Found!");
  }

  const existedUsername = await Seller.findOne({ username: body.username });

  if (existedUsername && existing.username != body.username) {
    throw new BadRequestError("This username already existed!");
  }

  const existedNumber = await Seller.findOne({
    phone_number: body.phone_number,
  });

  if (existedNumber && existing.phone_number != body.phone_number) {
    throw new BadRequestError("This phone number already existed!");
  }

  const existedEmail = await Seller.findOne({ email: body.email });

  if (existedEmail && existing.email != body.email) {
    throw new BadRequestError("This email already existed!");
  }

  const editedSeller = await Seller.findByIdAndUpdate(
    { _id: params.id },
    { ...existing._doc, ...body },
    {
      new: true,
    },
  );

  return editedSeller;
};
module.exports = editSellerServices;
