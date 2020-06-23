// const sequelize = require('sequelize');

// let Products = sequelize.define('products', {
//   productName: {
//     type: Sequelize.STRING,
//     field: 'product_name' // Will result in an attribute that is firstName when user facing but first_name in the database
//   },
//   productType: {
//     type: Sequelize.STRING
//   }
// });

// module.exports = Products;

'use strict';
module.exports = (sequelize, DataTypes) => {
  const Categories = sequelize.define('categories_name', {
    categoriesname: DataTypes.STRING,
  });
  return Categories;
};