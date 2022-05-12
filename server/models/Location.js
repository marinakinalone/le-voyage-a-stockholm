const mongoose = require('mongoose');

const { Schema } = mongoose;

const locationSchema = new Schema({
  id: mongoose.SchemaTypes.ObjectId,
  name: String,
  position: Object,
  category: String,
  description: String,
  address: String,
  directions: String,
},
{
  collection: 'locations',
});

const Location = mongoose.model('Location', locationSchema);

module.exports = Location;
