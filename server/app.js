const express = require('express');
const fs = require('fs');

const app = express();
const port = 3001;

app.get('/types', async (req, res) => {
  try {
    const types = fs.readFileSync('./locations/locationTypes.json');
    const parsedTypes = await JSON.parse(types);
    res.status(200).json(parsedTypes);
  } catch (err) {
    res.status(404).send('not found');
  }
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});

module.exports.app = app;
