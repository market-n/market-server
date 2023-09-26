const { NotFoundError, BadRequestError } = require("../../shared/errors");
const MarketComment = require("./MarketComment");

const editMarketCommentServices = async ({ body, user, params }) => {
  const existingComment = await MarketComment.findById({ _id: params.id });

  if (!existingComment) {
    throw new NotFoundError("Comment Not Found!");
  }

  if (user.id != existingComment.user_id) {
    throw new BadRequestError("Bu sizning comment emas!");
  }

  return MarketComment.findByIdAndUpdate(
    { _id: params.id },
    { comment: body.comment },
    { new: true },
  );
};

module.exports = editMarketCommentServices;
