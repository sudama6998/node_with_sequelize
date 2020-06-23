const express = require('express');
const route = express.Router();
const models = require('../../models');

route.get('/all', async (req, res) => {
  const productData = await models.products.findAll();
  if(productData) {
    res.status(200).json({
      data: productData,
      message: "Connection Successful"
    })
  } else {
    res.status(404).json({
      message: "not Successful"
    })
  }
})

module.exports = route;

