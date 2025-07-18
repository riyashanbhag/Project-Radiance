const express = require('express');
const mongoose = require("mongoose");
const path = require('path');
const cors = require('cors');
const productRoutes = require('./routes/products');
const authRoutes = require('./routes/auth');

const app = express();
const PORT = process.env.PORT || 3000;

// ✅ Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/radianceDB")
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// ✅ Middleware
app.use(cors());
app.use(express.json());

// ✅ Serve static files
app.use(express.static(path.join(__dirname, '..')));

// ✅ API routes
app.use('/api/products', productRoutes);
app.use('/api', authRoutes);

// ✅ Fallback for SPA (Frontend routing support)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'index.html'));
});

// ✅ Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
