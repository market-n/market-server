const { NotFoundError, BadRequestError } = require("../../shared/errors");
const MarketComment = require("./MarketComment");

const removeMarketCommentServices = async ({ user, params }) => {
  const existingComment = await MarketComment.findById({ _id: params.id });

  if (!existingComment) {
    throw new NotFoundError("Comment Not Found!");
  }

  if (
    user.id != existingComment.user_id ||
    user.role != "admin" ||
    user.role != "super_admin"
  ) {
    throw new BadRequestError("Bu sizning comment emas!");
  }

  return MarketComment.findByIdAndRemove({ _id: params.id });
};

module.exports = removeMarketCommentServices;
