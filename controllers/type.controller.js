const httpStatus = require('http-status');
const { ApiError, successTemplate, catchAsync, pick, failedTemplate } = require('../config/util');
const { typeLogic } = require('../logics/index');

const queryType = catchAsync(async (req, res) => {
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
  const result = await typeLogic.queryType(filter, options);
  res.send(successTemplate(result));
});

const getType = catchAsync(async (req, res) => {
  const type = await typeLogic.getTypeById(req.params.id);
  if (!type) {
    res.send(failedTemplate(httpStatus.NOT_FOUND, 'type not found'));
  }else{
    res.send(successTemplate(type));
  }
});



module.exports = {
  queryType,
  getType
};
