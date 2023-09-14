const mongoose = require("mongoose");

const type = {
  type: mongoose.SchemaTypes.String,
  required: true,
};

const MarketCategorySchema = new mongoose.Schema(
  {
    name: type,
    admin_id: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "admin",
    },
    is_deleted: {
      type: mongoose.SchemaTypes.Boolean,
      default: false,
    },
  },
  {
    versionKey: false,
    timestamps: false,
  },
);
const MarketCategory = mongoose.model("market-category", MarketCategorySchema);
module.exports = MarketCategory;
