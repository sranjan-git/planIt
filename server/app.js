const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const eventRoutes = require('./routes/eventRoutes');
require('dotenv').config();

const app = express();

// Connect to the database
connectDB();

// Middleware
app.use(cors({
    origin: "http://localhost:3000",
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
  }));
app.use(bodyParser.json());

// Routes
app.use('/api', eventRoutes);

// Start server
const PORT = process.env.PORT || 5005;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
