const httpStatus = require('http-status');
const { ApiError, successTemplate, catchAsync, pick, failedTemplate } = require('../config/util');
const { locationLogic } = require('../logics/index');

const queryLocation = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name']);
  const options = pick(req.query, ['sort', 'limit', 'page']);
  if(typeof filter.name === 'undefined'){
      filter.name = "";
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
  const result = await locationLogic.queryLocation(filter, options);
  res.send(successTemplate(result));
});

const getLocation = catchAsync(async (req, res) => {
  const location = await locationLogic.getLocationById(req.params.id);
  if (!location) {
    res.send(failedTemplate(httpStatus.NOT_FOUND, 'Location not found'));
  }else{
    res.send(successTemplate(location));
  }
});



module.exports = {
  queryLocation,
  getLocation
};
