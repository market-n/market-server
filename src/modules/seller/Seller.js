const mongoose = require("mongoose");

const type = {
  type: mongoose.SchemaTypes.String,
  required: true,
};

const SellerSchema = new mongoose.Schema(
  {
    first_name: type,

    last_name: type,

    city: type,

    email: {
      ...type,
      unique: true,
    },

    phone_number: {
      ...type,
      unique: true,
    },

    is_allow: {
      type: mongoose.SchemaTypes.Boolean,
      default: false,
    },

    admin_id: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "admin",
      default: "",
    },

    username: {
      ...type,
      unique: true,
    },

    password: type,

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
