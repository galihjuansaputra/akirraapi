const mongoose = require("mongoose");

const ProductsSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String, required: true },
    img: { type: String, rquired: true },
    categories: { type: Array },
    size: { type: String },
    color: { type: String },
    price: { type: Number, rquired: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductsSchema);
