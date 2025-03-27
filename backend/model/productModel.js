const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A product must have a name"],
  },
  price: {
    type: String,
    required: [true, "A product must have a price."],
  },
  priceDiscount: String,
  description: {
    type: String,
    required: [true, "A product must have a description."],
  },
  packagingSet: {
    type: String,
    required: [true, "A product must have a packaging set value."],
  },
  quantity: {
    type: Number,
    required: [true, "A product must have a specific quantity"],
  },
  rating: Number,
  ratingQuantity: Number,
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
