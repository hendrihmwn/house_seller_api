'use strict';
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	const master_type = sequelize.define('master_type', {
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
    tableName: 'master_type',
  });

  return master_type;
};