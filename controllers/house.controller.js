const httpStatus = require('http-status');
const { ApiError, successTemplate, catchAsync, pick, failedTemplate } = require('../config/util');
const { housesLogic } = require('../logics/index');

const queryHouses = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name','location','type','status']);
  const options = pick(req.query, ['sort', 'limit', 'page']);
  if(typeof filter.name === 'undefined'){
      filter.name = "";
  }
  if(typeof filter.location !== 'undefined'){
    filter.location = Number(filter.location);
  }
  if(typeof filter.type !== 'undefined'){
    filter.type = Number(filter.type);
  }
  if(typeof filter.status !== 'undefined'){
    filter.status = Number(filter.status);
  }
  if(typeof options.limit !== 'undefined'){
      options.limit = Number(options.limit);
  }
  if(typeof options.page !== 'undefined'){
      options.page = Number(options.page);
  }
  if(typeof options.sort === 'undefined'){
    options.sort = 'ASC';
}
  const result = await housesLogic.queryHouse(filter, options);
  res.send(successTemplate(result));
});

const getHouse = catchAsync(async (req, res) => {
  const house = await housesLogic.getHouseById(req.params.id);
  if (!house) {
    res.send(failedTemplate(httpStatus.NOT_FOUND, 'Product not found'));
  }else{
    res.send(successTemplate(house));
  }
});



module.exports = {
  queryHouses,
  getHouse
};
