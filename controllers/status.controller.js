const httpStatus = require('http-status');
const { ApiError, successTemplate, catchAsync, pick, failedTemplate } = require('../config/util');
const { statusLogic } = require('../logics/index');

const queryStatus = catchAsync(async (req, res) => {
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
  const result = await statusLogic.queryStatus(filter, options);
  res.send(successTemplate(result));
});

const getStatus = catchAsync(async (req, res) => {
  const status = await statusLogic.getStatusById(req.params.id);
  if (!status) {
    res.send(failedTemplate(httpStatus.NOT_FOUND, 'status not found'));
  }else{
    res.send(successTemplate(status));
  }
});



module.exports = {
  queryStatus,
  getStatus
};
