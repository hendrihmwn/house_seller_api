const { models } = require('../config/database');

/**
 * Query for houses
 * @param {Object} filter - Filter
 * @param {Object} options - Query options
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryHouse = async (filter, options) => {
  const houses = await models.houses.findAll({
    where:filter,
    offset:options.page,
    limit:options.limit
  });
  return houses;
};

/**
 * Get houses by id
 * @param {ObjectId} id
 * @returns {Promise<User>}
 */
const getHouseById = async (id) => {
  return models.houses.findOne({ 
    where: { id: id } });
};

module.exports = {
  queryHouse,
  getHouseById
};
