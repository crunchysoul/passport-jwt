const mongoose = require("./init.js");

const Product = mongoose.model("Product", {
  brandName: String,
  productName: String,
  category: String,
  color: String
});

Product.schema.index(
  { name: 1, brandName: 1, category: 1, color: 1 },
  { unique: true }
);

module.exports = Product;
