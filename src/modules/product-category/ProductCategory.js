const mongoose = require("mongoose");

const type = {
  type: mongoose.SchemaTypes.String,
  required: true,
};

const productCategorySchema = new mongoose.Schema(
  {
    name: type,
    market_id: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "market",
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
const productCategory = mongoose.model(
  "product-category",
  productCategorySchema,
);
module.exports = productCategory;
