const { models } = require('../config/database');
const Sequelize = require('sequelize');

/**
 * Query for locations
 * @param {Object} filter - Filter
 * @param {Object} options - Query options
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryLocation = async (filter, options) => {
  filter_arr = [{name: {[Sequelize.Op.like]: '%'+filter.name+'%',}}]
   
  const location = await models.master_location.findAll({
    where:{
        [Sequelize.Op.and] : filter_arr
      },
    offset:options.page,
    limit:options.limit,
    order:[
        ['id',options.sort]
    ]
  });
  return location;
};

/**
 * Get location by id
 * @param {ObjectId} id
 * @returns {Promise<User>}
 */
const getLocationById = async (id) => {
  return models.master_location.findOne({ 
    where: { id: id } });
};

module.exports = {
  queryLocation,
  getLocationById
};
