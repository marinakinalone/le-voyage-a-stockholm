const mongoose = require('mongoose');

const { Schema } = mongoose;

const locationSchema = new Schema({
  id: mongoose.SchemaTypes.ObjectId,
  name: { type: String, required: true },
  position: { type: Object, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  address: { type: String, required: true },
  directions: { type: String, required: true },
},
{
  collection: 'locations',
});

const Location = mongoose.model('Location', locationSchema);

module.exports = Location;
