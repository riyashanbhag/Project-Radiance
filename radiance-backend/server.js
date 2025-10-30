require('dotenv').config();

const express = require('express');
const mongoose = require("mongoose");
const path = require('path');
const cors = require('cors');
const productRoutes = require('./routes/products');
const authRoutes = require('./routes/auth');

const app = express();
const PORT = process.env.PORT || 3000;

// ✅ Connect to MongoDB Atlas (with safety + logging)
const mongoURI = process.env.MONGODB_URI || "mongodb+srv://Radiance:Radiance@radiance.aurvgzd.mongodb.net/?appName=Radiance";

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

// ✅ Middleware
app.use(cors({
  origin: ['https://radiance-riya.netlify.app'],
  credentials: true,
}));
app.use(express.json());

// ✅ Serve static files
app.use(express.static(path.join(__dirname, '..')));

// ✅ API routes
app.use('/api/products', productRoutes);
app.use('/api', authRoutes);

// ✅ Fallback route (for single-page frontend)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'index.html'));
});

// ✅ Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
