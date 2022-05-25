const mongoose = require('mongoose');
require('dotenv').config();

const callback = error => {
  if (error) {
    throw new Error(`error connecting to database: ${error.message}`);
  } else {
    // eslint-disable-next-line no-console
    console.log('connected to database');
  }
};

const connectDB = () => mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}, callback);

module.exports = connectDB;
