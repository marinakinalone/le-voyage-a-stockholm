const Category = require('../models/Category');

const getCategories = async (req, res) => {
  const data = await Category.find({});
  res.json(data);
};

module.exports = getCategories;
