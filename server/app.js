const express = require('express');
const fs = require('fs');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

const readDataFromFile = path => {
  const data = fs.readFileSync(path);
  const parsedData = JSON.parse(data);
  return parsedData;
};

app.use(cors());

app.get('/types', (req, res) => {
  try {
    const data = readDataFromFile('./locations/locationTypes.json');
    res
      .status(200)
      .send(data)
      .end();
  } catch (err) {
    res.status(404).send('types not found');
  }
});

app.get('/locations', (req, res) => {
  try {
    const data = readDataFromFile('./locations/locationsData.json');
    res
      .status(200)
      .send(data)
      .end();
  } catch (err) {
    res.status(404).send('locations not found');
  }
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening at http://localhost:${PORT}`);
});

module.exports.app = app;
