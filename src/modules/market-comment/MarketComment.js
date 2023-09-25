const mongoose = require("mongoose");

const type = {
  type: mongoose.SchemaTypes.String,
  required: true,
};

const MarketCommentSchema = new mongoose.Schema(
  {
    comment: type,
    user_id: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "user",
    },
    market_id: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "market",
    },
  },
  {
    versionKey: false,
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  },
);
const MarketComment = mongoose.model("market-comment", MarketCommentSchema);
module.exports = MarketComment;
