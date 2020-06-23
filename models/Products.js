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
  const Products = sequelize.define('products', {
    productname: DataTypes.STRING,
    categoriesId: DataTypes.INTEGER
  });

  Products.associate = (models) => {
    Products.belongsTo(models.categories_name, {foreignKey : 'categoriesId', as : 'categories'})
  }
  return Products;
};