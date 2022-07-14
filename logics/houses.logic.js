const { models } = require('../config/database');
const Sequelize = require('sequelize');

/**
 * Query for houses
 * @param {Object} filter - Filter
 * @param {Object} options - Query options
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryHouse = async (filter, options) => {
    console.log(filter);
    console.log(options);
    filter_arr = [{name: {[Sequelize.Op.like]: '%'+filter.name+'%',}}]
   
    if(filter.location !== undefined){
        filter_arr.push({ location_id: filter.location})
    }
    if(filter.type !== undefined){
        filter_arr.push({ type_id: filter.type})
    }
    if(filter.status !== undefined){
        filter_arr.push({ status_id: filter.status})
    }

  const houses = await models.houses.findAll({
    include: [
        {
            model: models.master_location, 
            attributes: ['id','name'],
            as: 'location'
        },
        {
            model: models.master_type,  
            attributes: ['id','name'],
            as: 'type'
        },
        {
            model: models.master_status, 
            attributes: ['id','name'] ,
            as: 'status'
        },
      ],
    where:{
        [Sequelize.Op.and] : filter_arr
      },
    offset:options.page,
    limit:options.limit,
    order:[
        ['id',options.sort]
    ]
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
