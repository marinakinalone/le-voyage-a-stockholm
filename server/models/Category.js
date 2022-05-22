const mongoose = require('mongoose');

const { Schema } = mongoose;

const categorySchema = new Schema({
  id: mongoose.SchemaTypes.ObjectId,
  category: String,
  description: String,
  colors: Object,
},
{
  collection: 'categories',
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
