const express = require('express');
const cors = require('cors');
const connectDb = require('./db/db');
const Category = require('./models/Category');
require('dotenv').config();

connectDb();
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

app.get('/categories', async (req, res) => {
  try {
    const data = await Category.find({});
    res
      .json(data)
      .end();
  } catch (err) {
    res.status(404).send('types not found');
  }
});

// app.get('/locations', (req, res) => {
//   try {
//     const data = readDataFromFile('./locations/locationsData.json');
//     res
//       .status(200)
//       .send(data)
//       .end();
//   } catch (err) {
//     res.status(404).send('locations not found');
//   }
// });

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening at http://localhost:${PORT}`);
});

module.exports.app = app;
