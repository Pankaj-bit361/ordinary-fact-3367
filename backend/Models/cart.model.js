const mongoose = require("mongoose");

const cartSchema = mongoose.Schema(
  {
    title: { type: String, require: true },
    comments: [{ body: String }],
    body: { type: String, require: true },
    author: { type: String, require: true },
    category: { type: String, require: true },
    authorID: { type: String, require: true },
  },
  {
    versionKey: false,
  }
);

const CartModel = mongoose.model("cart", cartSchema);

module.exports = {
  CartModel,
};
