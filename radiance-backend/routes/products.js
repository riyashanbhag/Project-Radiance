const express = require("express");
const router = express.Router();
const Product = require("../models/product");

// ✅ Add new product
// POST /api/products/add
router.post("/add", async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.status(201).json({ message: "Product added!" });
  } catch (err) {
    res.status(400).json({ message: "Error adding product", error: err });
  }
});

// ✅ Get all products with optional search, sort
// GET /api/products?search=face&sort=price&order=asc
router.get("/", async (req, res) => {
  try {
    const { search, sort, order } = req.query;

    // Create filter query
    const query = search
      ? {
          $or: [
            { name: { $regex: search, $options: "i" } },
            { description: { $regex: search, $options: "i" } }
          ],
        }
      : {};

    // Create sorting option
    const sortOption = sort ? { [sort]: order === "desc" ? -1 : 1 } : {};

    // Fetch and return products
    const products = await Product.find(query).sort(sortOption);
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: "Error fetching products", error: err });
  }
});

// ✅ Get product by ID
// GET /api/products/:id
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: "Error fetching product", error: err });
  }
});

// ✅ Delete product by ID
// DELETE /api/products/:id
router.delete("/:id", async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: "Product deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting product", error: err });
  }
});

module.exports = router;
