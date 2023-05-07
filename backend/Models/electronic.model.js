const mongoose = require("mongoose");

const electronicSchema = mongoose.Schema(
  {
    title: { type: String, require: true },
    price: { type: Number, require: true },
    category: { type: String, require: true },
    quantity: { type: Number, require: true },
    description: { type: String, require: true },
    brand: { type: String, require: true },
    discount: { type: Number, require: true },
    percentage: { type: String, require: true },
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

const ElectronicModel = mongoose.model("electronic", electronicSchema);

module.exports = {
  ElectronicModel,
};
