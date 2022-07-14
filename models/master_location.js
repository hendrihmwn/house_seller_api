'use strict';
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	const master_location = sequelize.define('master_location', {
    id: {
      type:DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
  }, {
    timestamps: false,
    underscored: true,

    freezeTableName: true,
    tableName: 'master_locations',
  });

  return master_location;
};