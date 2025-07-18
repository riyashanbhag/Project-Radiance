const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true }, // ensures no duplicate emails
  password: String // ⚠️ should be hashed in production
});

module.exports = mongoose.model("User", userSchema);
