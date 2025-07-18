const express = require("express");
const router = express.Router();
const User = require("../models/User"); // Import the MongoDB User model

// ✅ POST /api/register — Register Route
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  // Validate required fields
  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists." });
    }

    // Create and save new user
    const newUser = new User({ name, email, password });
    await newUser.save();

    res.status(201).json({ message: "✅ Registration successful." });
  } catch (error) {
    console.error("❌ Registration error:", error);
    res.status(500).json({ message: "Server error. Try again later." });
  }
});

// ✅ POST /api/login — Login Route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists and password matches
    const user = await User.findOne({ email, password });
    if (!user) {
      return res.status(401).json({ message: "❌ Invalid credentials." });
    }

    res.json({ message: "🎉 Login successful!", name: user.name });
  } catch (error) {
    console.error("❌ Login error:", error);
    res.status(500).json({ message: "Server error. Try again later." });
  }
});

module.exports = router;
