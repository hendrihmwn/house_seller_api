const { models } = require('../config/database');
const Sequelize = require('sequelize');

/**
 * Query for types
 * @param {Object} filter - Filter
 * @param {Object} options - Query options
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryType = async (filter, options) => {
  filter_arr = [{name: {[Sequelize.Op.like]: '%'+filter.name+'%',}}]
   
  const type = await models.master_type.findAll({
    where:{
        [Sequelize.Op.and] : filter_arr
      },
    offset:options.page,
    limit:options.limit,
    order:[
        ['id',options.sort]
    ]
  });
  return type;
};

/**
 * Get type by id
 * @param {ObjectId} id
 * @returns {Promise<User>}
 */
const getTypeById = async (id) => {
  return models.master_type.findOne({ 
    where: { id: id } });
};

module.exports = {
  queryType,
  getTypeById
};
