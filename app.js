// import express library
const express = require('express');
const app = express();

// Set up middleware with use();
// Anything starting with the first argument '/products', will be handled by 'productRoutes' and forwarded to the product page:
app.use('/products', productRoutes);

module.exports = app;