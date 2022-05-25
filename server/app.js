const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDb = require('./db/db');
const categoriesRoute = require('./routes/categoriesRoute');
const locationsRoute = require('./routes/locationsRoute');

require('dotenv').config();

connectDb();
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/categories', categoriesRoute);
app.use('/locations', locationsRoute);

module.exports = app;
