// set up a route
const express = require('express');

// set up express router
const router = express.Router();

// implement get route for product. Use get(), first argument is the url and second is the handler to handle GET requests
router.get('/', (req, res, next) => {
  res.status(202).json({
    // return a JSON Object with property 'message'
    message: 'Handling GET request'
  });
});