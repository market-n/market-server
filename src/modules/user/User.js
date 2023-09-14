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
    email: type,
    city: type,
    phone_number: {
      type: mongoose.SchemaTypes.Number,
      required: true,
    },
    image: type,
    password: type,
    username: type,
    is_deleted: {
      type: mongoose.SchemaTypes.Boolean,
      required: true,
    },
  },
  {
    versionKey: true,
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  },
);

const User = mongoose.model("user", Userschema);
module.exports = User;
