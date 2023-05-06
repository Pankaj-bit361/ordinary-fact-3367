const mongoose = require("mongoose");

const pharmaSchema = mongoose.Schema(
  {
    title: { type: String, require: true },
    price: { type: Number, require: true },
    category: { type: String },
    quantity: { type: Number, require: true },
    description: { type: String, require: true },
    brand: { type: String, require: true },
    discounted: { type: Number, require: true },
    percentage: { type: Number, require: true },
    images: {
      img1: String,
      img2: String,
      img3: String,
      img4: String,
    },
  },
  {
    versionKey: false,
  }
);

const PharmaModel = mongoose.model("pharma", pharmaSchema);

module.exports = {
  PharmaModel,
};
