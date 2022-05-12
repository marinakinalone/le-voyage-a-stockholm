const express = require('express');
const cors = require('cors');
const connectDb = require('./db/db');
const Category = require('./models/Category');
const Location = require('./models/Location');
require('dotenv').config();

connectDb();
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

app.get('/categories', async (req, res) => {
  try {
    const data = await Category.find({});
    res.json(data);
  } catch (err) {
    res.status(404).send('categories not found');
  }
});

app.get('/locations', async (req, res) => {
  try {
    const data = await Location.find({});
    res.json(data);
  } catch (err) {
    res.status(404).send('locations not found');
  }
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening at http://localhost:${PORT}`);
});

module.exports.app = app;
