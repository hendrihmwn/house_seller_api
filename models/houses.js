'use strict';
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	const houses = sequelize.define('houses', {
    id: {
      type:DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    location_id: DataTypes.INTEGER,
    type_id: DataTypes.INTEGER,
    status_id: DataTypes.INTEGER,
    room: DataTypes.INTEGER,
    bathroom: DataTypes.INTEGER,
    square: DataTypes.INTEGER,
    contact_name: DataTypes.INTEGER,
    price: DataTypes.INTEGER
  }, {
    timestamps: false,
    underscored: true,

    freezeTableName: true,
    tableName: 'houses',
  });

  return houses;
};