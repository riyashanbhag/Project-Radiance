const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  mrp: Number,
  discount: String,
 stock: {
    type: Number,
    default: 10   // or 0, as per your logic
  },
  image: String
});

module.exports = mongoose.model("Product", productSchema);
