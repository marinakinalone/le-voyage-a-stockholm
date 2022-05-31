const Location = require('../models/Location');

const getLocations = async (req, res) => {
  const data = await Location.find({});
  res.json(data);
};

const getOneLocation = async (req, res) => {
  const data = await Location.findOne({
    name: req.params.name,
  });
  if (!data) {
    res.status(404).send('cannot find location');
    return;
  }
  res.json(data);
};

const createLocation = async (req, res) => {
  if ((Object.keys(req.body).length) !== 6) {
    res.status(400).send('cannot create location, make sure you have a name, position object (with lat and lon), category, description, address and directions in your body request');
    return;
  }
  const data = await Location.create({
    name: req.body.name,
    position: req.body.position,
    category: req.body.category,
    description: req.body.description,
    address: req.body.address,
    directions: req.body.directions,
  });
  res.json(data);
};

const updateLocation = async (req, res) => {
  const data = await Location.findOneAndUpdate({
    name: req.params.name,
  }, {
    name: req.body.name,
    position: req.body.position,
    category: req.body.category,
    description: req.body.description,
    address: req.body.address,
    directions: req.body.directions,
  }, { new: true });
  if (!data) {
    res.status(404).send('cannot find location to update');
    return;
  }
  res.json(data);
};

const deleteLocation = async (req, res) => {
  const data = await Location.deleteOne({
    name: req.params.name,
  });
  if (data.deletedCount === 0) {
    res.status(404).send('cannot find location to delete');
    return;
  }
  res.json(data);
};

module.exports = {
  getLocations, getOneLocation, createLocation, updateLocation, deleteLocation,
};
