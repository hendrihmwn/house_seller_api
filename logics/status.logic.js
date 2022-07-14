const { models } = require('../config/database');
const Sequelize = require('sequelize');

/**
 * Query for statuss
 * @param {Object} filter - Filter
 * @param {Object} options - Query options
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryStatus = async (filter, options) => {
  filter_arr = [{name: {[Sequelize.Op.like]: '%'+filter.name+'%',}}]
   
  const status = await models.master_status.findAll({
    where:{
        [Sequelize.Op.and] : filter_arr
      },
    offset:options.page,
    limit:options.limit,
    order:[
        ['id',options.sort]
    ]
  });
  return status;
};

/**
 * Get status by id
 * @param {ObjectId} id
 * @returns {Promise<User>}
 */
const getStatusById = async (id) => {
  return models.master_status.findOne({ 
    where: { id: id } });
};

module.exports = {
  queryStatus,
  getStatusById
};
