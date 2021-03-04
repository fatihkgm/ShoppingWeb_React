const express = require('express');
const app = express();

app.use(express.json());

const products = require('./routes/product');
module.exports = app;
