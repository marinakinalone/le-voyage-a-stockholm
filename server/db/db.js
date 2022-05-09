const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  // eslint-disable-next-line no-console
  console.log('MongoDB connected');
};

module.exports = connectDB;
