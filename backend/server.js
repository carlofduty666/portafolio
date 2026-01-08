require('dotenv').config();
const express = require('express');
const cors = require('cors');
const data = require('./data');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Endpoint to get all portfolio data
app.get('/api/data', (req, res) => {
  res.json(data);
});

// Health check endpoint for UptimeRobot
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
