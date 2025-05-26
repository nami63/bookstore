const express = require('express');
const connectDB = require('./db');
require('dotenv').config();
const cors = require("cors"); // Move this up

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); // ✅ Apply CORS before routes and middleware
app.use(express.json());

connectDB();

app.get('/', (req, res) => {
  res.send('Welcome to the Bookstore API');
});

const bookRoutes = require('./routes/book');
app.use('/books', bookRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
