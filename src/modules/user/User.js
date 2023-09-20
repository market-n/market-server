const mongoose = require("mongoose");

const type = {
  type: mongoose.SchemaTypes.String,
  required: true,
};

const Userschema = new mongoose.Schema(
  {
    first_name: type,
    last_name: type,
    age: {
      type: mongoose.SchemaTypes.Number,
      required: true,
    },
    email: {
      type: mongoose.SchemaTypes.String,
      required: true,
      unique: true,
    },
    city: type,
    phone_number: {
      type: mongoose.SchemaTypes.Number,
      required: true,
      unique: true,
    },
    image: type,
    password: type,
    username: {
      type: mongoose.SchemaTypes.String,
      required: true,
      unique: true,
    },
    is_allow: {
      type: mongoose.SchemaTypes.Boolean,
      default: false,
    },
    is_deleted: {
      type: mongoose.SchemaTypes.Boolean,
      default: false,
    },
    admin_id: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "admin",
      default: null,
    },
  },

  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  },
);

const User = mongoose.model("user", Userschema);
module.exports = User;
