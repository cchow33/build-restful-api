// set up a route
const express = require('express');

// set up express router
const router = express.Router();

// implement get route for product. Use get(), first argument is the url
router.get('/', (req, res, next) => {
  res.status(404);
});