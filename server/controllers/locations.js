const Location = require('../models/Location');

const getLocations = async (req, res) => {
  const data = await Location.find({});
  res.json(data);
};

module.exports = getLocations;
