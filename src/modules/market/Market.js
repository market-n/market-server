const mongoose = require("mongoose");

const type = {
  type: mongoose.SchemaTypes.String,
  required: true,
};
const MarketSchema = new mongoose.Schema(
  {
    name: type,
    image: type,
    description: type,
    seller_id: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "seller",
      default: null,
    },
    category_id: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "market-category",
      default: null,
    },
    admin_id: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "admin",
      default: null,
    },
    is_allow: {
      type: mongoose.SchemaTypes.Boolean,
      default: false,
    },
    is_deleted: {
      type: mongoose.SchemaTypes.Boolean,
      default: false,
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

const Market = mongoose.model("market", MarketSchema);
module.exports = Market;
