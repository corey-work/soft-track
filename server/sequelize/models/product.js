'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Product.init({
    name:
    {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: 
    {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    shortText: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    longText: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    features: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};