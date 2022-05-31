const mongoose = require('mongoose');

const { Schema } = mongoose;

const categorySchema = new Schema({
  id: mongoose.SchemaTypes.ObjectId,
  category: { type: String, required: true },
  description: { type: String, required: true },
  colors: { type: Object, required: true },
},
{
  collection: 'categories',
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
