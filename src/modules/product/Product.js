const mongoose = require("mongoose");

const type = {
  type: mongoose.SchemaTypes.String,
  required: true,
};

const ProductSchema = new mongoose.Schema(
  {
    name: type,
    description: type,
    image: type,
    price: {
      type: mongoose.SchemaTypes.Number,
      required: true,
    },
    quantity: {
      type: mongoose.SchemaTypes.Number,
      required: true,
    },
    category_id: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "category",
      required: true,
    },
    market_id: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "market",
      required: true,
    },
    measurement: {
      type: mongoose.SchemaTypes.String,
      enum: ["kg", "dona", "pochka", "blok"],
      required: true,
    },
    seller_id: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "seller",
      required: true,
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
const Product = mongoose.model("product", ProductSchema);
module.exports = Product;
