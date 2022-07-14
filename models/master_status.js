'use strict';
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	const master_status = sequelize.define('master_status', {
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
    tableName: 'master_status',
  });

  return master_status;
};