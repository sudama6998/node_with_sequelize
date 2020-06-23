const express = require('express');
const productsRoute = require('./Products');
const router = express.Router();

router.use('/products', productsRoute);

module.exports = router;